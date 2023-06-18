import { EXCHANGE_API_URL } from 'utils/const';
import { ITicker } from 'utils/type';

export const fetchTickersById = async (id: string, page?: number): Promise<ITicker[]> => {
  try {
    const response = await fetch(`${EXCHANGE_API_URL}${id}/tickers?page=${page || 1}`);
    const data = await response.json();

    return data.tickers.map(({ coin_id, base, target, volume }: ITicker) => ({
      coin_id,
      pair: `${base}/${target}`,
      volume: volume.toFixed(2),
    }));
  } catch (err) {
    console.error(`Error fetching tickers list with ID ${id}:`, err);

    return [];
  }
};

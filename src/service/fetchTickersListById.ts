import { EXCHANGE_API_URL, PER_PAGE, TOTAL_PAGE } from 'utils/const';
import { ITicker } from 'utils/type';

interface Parameter {
  maxPage: number;
  data: ITicker[];
}

export const fetchTickersById = async (id: string, page?: number): Promise<Parameter> => {
  try {
    const response = await fetch(`${EXCHANGE_API_URL}${id}/tickers?page=${page || 1}`);
    const data = await response.json();

    const { headers } = response;
    const pageLength = Math.ceil(Number(headers.get(TOTAL_PAGE)) / Number(headers.get(PER_PAGE)));

    return {
      maxPage: pageLength,
      data: data.tickers.map(({ coin_id, base, target, volume }: ITicker) => ({
        id: crypto.randomUUID(),
        coin_id,
        pair: `${base}/${target}`,
        volume: Number(volume.toFixed(2)),
      })),
    };
  } catch (err) {
    console.error(`Error fetching tickers list with ID ${id}:`, err);

    return {
      maxPage: 1,
      data: [],
    };
  }
};

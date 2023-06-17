import { EXCHANGE_API_URL } from 'constants/const';
import { ITicker } from 'types/type';

export const fetchTickersById = async (id: string): Promise<ITicker[]> => {
  try {
    // ! url /tickers
    const response = await fetch(`${EXCHANGE_API_URL}${id}/tickers`);
    const data = await response.json();

    return data.tickers.map(({ base, target }: ITicker) => ({ base, target }));
  } catch (err) {
    console.error(`Error fetching tickers list with ID ${id}:`, err);

    return [];
  }
};

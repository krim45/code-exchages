import { EXCHANGE_API_URL } from 'constants/const';
import { Ticker } from 'types/type';

export const fetchTickersById = async (id: string): Promise<Ticker[]> => {
  try {
    // ! url /tickers
    const response = await fetch(`${EXCHANGE_API_URL}${id}/tickers`);
    const data = await response.json();

    return data.tickers.map(({ base, target }: Ticker) => ({ base, target }));
  } catch (err) {
    console.error(`Error fetching tickers list with ID ${id}:`, err);

    return [];
  }
};
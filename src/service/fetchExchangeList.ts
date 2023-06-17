import { EXCHANGE_API_URL } from 'constants/const';
import { Exchange } from 'types/type';

export const fetchExchangeList = async (): Promise<Exchange[]> => {
  try {
    const response = await fetch(EXCHANGE_API_URL);
    const data: Exchange[] = await response.json();

    return data;
  } catch (err) {
    console.error('Error fetching exchange list:', err);

    return [];
  }
};

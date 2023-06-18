import { EXCHANGE_API_URL } from 'utils/const';
import { IExchange } from 'utils/type';

export const fetchExchangeList = async (page?: number): Promise<IExchange[]> => {
  try {
    const response = await fetch(`${EXCHANGE_API_URL}?page=${page || 1}`);
    const data: IExchange[] = await response.json();

    return data;
  } catch (err) {
    console.error('Error fetching exchange list:', err);

    return [];
  }
};

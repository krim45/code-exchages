import { EXCHANGE_API_URL } from 'constants/const';
import { IExchange } from 'types/type';

export const fetchExchangeList = async (): Promise<IExchange[]> => {
  try {
    const response = await fetch(EXCHANGE_API_URL);
    const data: IExchange[] = await response.json();

    return data;
  } catch (err) {
    console.error('Error fetching exchange list:', err);

    return [];
  }
};

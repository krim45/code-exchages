import { EXCHANGE_API_URL, PER_PAGE, TOTAL_PAGE } from 'utils/const';
import { IExchange } from 'utils/type';

interface Parameter {
  maxPage: number;
  data: IExchange[];
}

export const fetchExchangeList = async (page?: number): Promise<Parameter> => {
  try {
    const response = await fetch(`${EXCHANGE_API_URL}?page=${page || 1}`);
    const data: IExchange[] = await response.json();

    const { headers } = response;
    const pageLength = Math.ceil(Number(headers.get(TOTAL_PAGE)) / Number(headers.get(PER_PAGE)));

    return {
      maxPage: pageLength,
      data: data.map((item: IExchange) => ({
        ...item,
        trade_volume_24h_btc: Number(item.trade_volume_24h_btc.toFixed(2)),
      })),
    };
  } catch (err) {
    console.error('Error fetching exchange list:', err);

    return {
      maxPage: 1,
      data: [],
    };
  }
};

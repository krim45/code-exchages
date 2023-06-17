import { fetchTickersById } from 'service/fetchTickersListById';
import { Ticker } from 'types/type';

export const fetchTickerListAndSave = async (id: string, setTickerList: (exchangesList: Ticker[]) => void) => {
  const tickerList = await fetchTickersById(id);
  setTickerList(tickerList);
};

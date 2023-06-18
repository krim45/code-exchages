import { fetchTickersById } from 'service/fetchTickersListById';
import { ITicker } from 'utils/type';

export const fetchTickerListAndSave = async (id: string, setTickerList: (exchangesList: ITicker[]) => void) => {
  const tickerList = await fetchTickersById(id);
  setTickerList(tickerList);
};

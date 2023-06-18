import { SetterOrUpdater } from 'recoil';
import { fetchTickersById } from 'service/fetchTickersListById';
import { ITicker } from 'utils/type';

export const fetchTickerListAndSave = async (id: string, setTickerList: SetterOrUpdater<ITicker[]>, page?: number) => {
  const tickerList = await fetchTickersById(id, page);
  setTickerList((oldTickerList) => {
    const newTickerList = oldTickerList ? [...oldTickerList, ...tickerList] : [];
    return newTickerList;
  });
};

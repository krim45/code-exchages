import { SetterOrUpdater } from 'recoil';
import { fetchTickersById } from 'service/fetchTickersListById';
import { ITicker } from 'utils/type';

interface IParameter {
  id: string;
  page?: number;
  setTickerList: SetterOrUpdater<ITicker[]>;
  setHasNextPage: (hasNexPage: boolean) => void;
}

export const fetchTickerListAndSave = async (param: IParameter): Promise<void> => {
  const { id, page = 1, setTickerList } = param;
  const { data: tickersList } = await fetchTickersById(id, page);

  setTickerList(tickersList);
};

export const fetchMoreTickerList = async (param: IParameter): Promise<void> => {
  const { id, page = 1, setTickerList, setHasNextPage } = param;
  const { maxPage, data: tickersList } = await fetchTickersById(id, page);

  if (maxPage <= page) {
    setHasNextPage(false);
  }

  setTickerList((prevTickerList) => {
    const newTickerList = prevTickerList ? [...prevTickerList, ...tickersList] : [];
    return newTickerList;
  });
};

import { SetterOrUpdater } from 'recoil';
import { fetchExchangeList } from 'service/fetchExchangeList';
import { IExchange } from 'utils/type';

interface IParameter {
  page?: number;
  setExchangeList: SetterOrUpdater<IExchange[]>;
  setHasNextPage: (hasNexPage: boolean) => void;
}

export const fetchExchangeListAndSave = async (param: IParameter): Promise<void> => {
  const { page = 1, setExchangeList, setHasNextPage } = param;
  const { maxPage, data: exchangeList } = await fetchExchangeList(page);

  if (maxPage <= page) {
    setHasNextPage(false);
  }

  setExchangeList((prevExchangeList) => {
    const newExchangeList = prevExchangeList ? [...prevExchangeList, ...exchangeList] : [];
    return newExchangeList;
  });
};

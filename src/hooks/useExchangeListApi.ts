import { SetterOrUpdater } from 'recoil';
import { fetchExchangeList } from 'service/fetchExchangeList';
import { IExchange } from 'utils/type';

export const fetchExchangeListAndSave = async (
  setExchangeList: SetterOrUpdater<IExchange[]>,
  page?: number
): Promise<void> => {
  const exchangeList = await fetchExchangeList(page);
  setExchangeList((oldExchangeList) => {
    const newExchangeList = oldExchangeList ? [...oldExchangeList, ...exchangeList] : [];
    return newExchangeList;
  });
};

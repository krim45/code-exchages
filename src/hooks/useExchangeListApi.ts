import { fetchExchangeList } from 'service/fetchExchangeList';
import { IExchange } from 'utils/type';

export const fetchExchangeListAndSave = async (setExchangeList: (exchangesList: IExchange[]) => void) => {
  const exchangeList = await fetchExchangeList();
  setExchangeList(exchangeList);
};

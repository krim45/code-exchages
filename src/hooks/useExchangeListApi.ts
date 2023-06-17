import { fetchExchangeList } from 'service/fetchExchangeList';
import { Exchange } from 'types/type';

export const fetchExchangeListAndSave = async (setExchangeList: (exchangesList: Exchange[]) => void) => {
  const exchangeList = await fetchExchangeList();
  setExchangeList(exchangeList);
};

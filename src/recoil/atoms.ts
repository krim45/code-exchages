import { atom } from 'recoil';
import { IExchange } from 'utils/type';

export const exchangeListState = atom<IExchange[]>({
  key: 'exchangesListState',
  default: [],
});

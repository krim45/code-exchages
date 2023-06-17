import { atom } from 'recoil';
import { IExchange } from 'types/type';

export const exchangeListState = atom<IExchange[]>({
  key: 'exchangesListState',
  default: [],
});

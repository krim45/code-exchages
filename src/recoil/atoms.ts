import { atom } from 'recoil';
import { Exchange } from 'types/type';

export const exchangeListState = atom<Exchange[]>({
  key: 'exchangesListState',
  default: [],
});

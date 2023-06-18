import { SetterOrUpdater } from 'recoil';

export interface IExchange {
  [index: string | number]: string | number;
  id: string;
  name: string;
  image: string;
  trust_score: number;
  trust_score_rank: number;
  trade_volume_24h_btc: number;
}

export interface IExchangeDetail {
  tickers: ITicker[];
}

export interface ITicker {
  [index: string | number]: string | number;
  id: string;
  coin_id: string;
  base: string;
  target: string;
  volume: number;
  pair: string;
}

export interface ITableColumn {
  label: string;
  property: string;
  sortable: boolean;
  isSort: boolean;
}

export interface ITableProps {
  theadList: ITableColumn[];
  dataList: TableItem[];
  setDataState: SetterOrUpdater<TableRowList>;
  onClickRow?: (value: TableItem) => void;
}

export type TableItem = IExchange | ITicker;

export type TableRowList = (IExchange | ITicker)[];

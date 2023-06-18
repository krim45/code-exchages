import { ITableColumn } from 'utils/type';

export const exchangeTableColumnList: ITableColumn[] = [
  {
    label: '신뢰도 순위',
    property: 'trust_score_rank',
    sortable: true,
    isSort: false,
  },
  {
    label: '거래소',
    property: 'name',
    sortable: false,
    isSort: true,
  },
  {
    label: '신뢰도',
    property: 'trust_score',
    sortable: false,
    isSort: true,
  },
  {
    label: '24시간 BTC 거래량',
    property: 'trade_volume_24h_btc',
    sortable: true,
    isSort: false,
  },
];

export const tickerTableColumnList: ITableColumn[] = [
  {
    label: '코인',
    property: 'coin_id',
    sortable: true,
    isSort: false,
  },
  {
    label: '거래쌍',
    property: 'pair',
    sortable: false,
    isSort: false,
  },
  {
    label: '거래량',
    property: 'volume',
    sortable: true,
    isSort: false,
  },
];

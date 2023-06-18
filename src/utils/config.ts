import { ITableField } from 'utils/type';

export const exchangeFieldList: ITableField[] = [
  {
    label: '신뢰도 순위',
    property: 'trust_score_rank',
    sort: true,
  },
  {
    label: '거래소',
    property: 'name',
    sort: true,
  },
  {
    label: '신뢰도',
    property: 'trust_score',
    sort: true,
  },
  {
    label: '24시간 BTC 거래량',
    property: 'trade_volume_24h_btc',
    sort: true,
  },
];

export const tickerFieldList: ITableField[] = [
  {
    label: '코인',
    property: 'coin_id',
    sort: false,
  },
  {
    label: '거래쌍',
    property: 'pair',
    sort: false,
  },
  {
    label: '거래량',
    property: 'volume',
    sort: true,
  },
];

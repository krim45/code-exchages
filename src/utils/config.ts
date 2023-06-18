import { ITheadField } from 'utils/type';

export const theadFieldList: ITheadField[] = [
  {
    name: '신뢰도 순위',
    property: 'trust_score_rank',
    // sort: false,
  },
  {
    name: '거래소',
    property: 'name',
    // sort: false,
  },
  {
    name: '신뢰도',
    property: 'trust_score',
    // sort: false,
  },
  {
    name: '24시간 BTC 거래량',
    property: 'trade_volume_24h_btc',
    // sort: true,
  },
];

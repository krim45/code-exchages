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
  coin_id: string;
  base: string;
  target: string;
  volume: number;
  pair: string;
}

export interface ITableField {
  label: string;
  property: string;
  sort: boolean;
}

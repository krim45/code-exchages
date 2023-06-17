export type Exchange = {
  // ! Q object['string property'] 사용시 에러
  [index: string]: any;
  id: string;
  name: string;
  image: string;
  trade_volume_24h_btc: number;
  trust_score: number;
  trust_score_rank: number;
};

export type ExchangeDetail = {
  tickers: Ticker[];
};

export type Ticker = {
  base: string;
  target: string;
};

export type TheadField = {
  name: string;
  property: string;
  sort: boolean;
};

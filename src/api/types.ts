export interface Welcome {
  Message?:       string;
  Type?:          number;
  MetaData?:      MetaData;
  SponsoredData?: any[];
  Data?:          Datum[];
  RateLimit?:     RateLimit;
  HasWarning?:    boolean;
}

export interface Datum {
  CoinInfo?: CoinInfo;
  RAW?:      RateLimit;
  DISPLAY?:  RateLimit;
}

export interface CoinInfo {
  Id?:                 string;
  Name?:               string;
  FullName?:           string;
  Internal?:           string;
  ImageUrl?:           string;
  Url?:                string;
  Algorithm?:          string;
  ProofType?:          string;
  Rating?:             Rating;
  NetHashesPerSecond?: number;
  BlockNumber?:        number;
  BlockTime?:          number;
  BlockReward?:        number;
  AssetLaunchDate?:    string;
  MaxSupply?:          number;
  Type?:               number;
  DocumentType?:       string;
}

export interface Rating {
  Weiss?: Weiss;
}

export interface Weiss {
  Rating?:                   string;
  TechnologyAdoptionRating?: string;
  MarketPerformanceRating?:  string;
}

export interface RateLimit {
}

export interface MetaData {
  Count?: number;
}

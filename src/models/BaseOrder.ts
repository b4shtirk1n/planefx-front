import { BaseModel } from "./BaseModel";

export interface BaseOrder extends BaseModel {
  account: number;
  order: number;
  volume: number;
  timeOpened: Date;
  priceOpened: number;
  sL: number;
  tP: number;
  swap: number;
  commissions: number;
  symbol: number;
}
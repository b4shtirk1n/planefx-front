import { BaseModel } from "./BaseModel";

export interface BaseOrder extends BaseModel {
  account: number;
  order: number;
  volume: number;
  timeOpened: Date;
  priceOpened: number;
  sl: number;
  tp: number;
  swap: number;
  commissions: number;
  profit: number;
  symbol: string;
}
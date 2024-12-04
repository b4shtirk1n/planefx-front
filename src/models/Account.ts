import { BaseModel } from "./BaseModel";

export interface Account extends BaseModel {
  name: string;
  number: number;
  isCent: boolean;
  profit: number;
  profitToday: number;
  profitYesterday: number;
  profitWeek: number;
  drawdown: number;
  marginLevel: number;
  balance: number;
}

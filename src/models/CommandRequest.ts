import { CommandType } from "../enums/CommandType";

export class CommandRequest {
  account: number;
  order?: number;
  volume?: number;
  ticker?: string;
  orderType: string;
  type: CommandType = this.volume ? CommandType.Open : CommandType.Close;

  constructor(account: number, orderType: string, ticker?: string)
  constructor(account: number, orderType: string, ticker?: string, order?: number, volume?: number) {
    this.account = account;
    this.order = order;
    this.volume = volume;
    this.ticker = ticker;
    this.orderType = orderType;
  }
}
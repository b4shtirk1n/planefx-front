import { CommandType } from "../enums/CommandType";

export class CommandRequest {
  account: number;
  order?: number;
  volume?: number;
  price?: number;
  ticker?: string;
  orderType: string;
  type: CommandType;

  constructor(account: number, orderType: string, type: CommandType, order?: number, ticker?: string, volume?: number) {
    this.account = account;
    this.order = order;
    this.volume = volume;
    this.ticker = ticker;
    this.orderType = orderType;
    this.type = type;
  }
}
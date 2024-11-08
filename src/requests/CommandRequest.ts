import { CommandType } from "../enums/CommandType";

export class CommandRequest {
  account: number;
  type: CommandType;
  orderType: string;
  order?: number;
  volume?: number;
  ticker?: string;
  price?: number;

  constructor(
    account: number,
    type: CommandType,
    orderType: string,
    order?: number,
    volume?: number,
    ticker?: string,
    price?: number
  ) {
    this.account = account;
    this.type = type;
    this.orderType = orderType;
    this.order = order;
    this.volume = volume;
    this.ticker = ticker;
    this.price = price;
  }
}
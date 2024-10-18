import { CommandType } from "../enums/CommandType";

export class CommandRequest {
  account: number;
  order?: number;
  volume?: number;
  ticker?: string;
  price?: number;
  orderType?: string;
  type: CommandType;

  constructor(
    account: number,
    type: CommandType,
    orderType?: string,
    order?: number,
    volume?: number,
    ticker?: string,
    price?: number
  ) {
    this.account = account;
    this.order = order;
    this.volume = volume;
    this.ticker = ticker;
    this.price = price;
    this.orderType = orderType;
    this.type = type;
  }
}
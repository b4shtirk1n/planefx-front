import { BaseOrder } from "./BaseOrder";

export class CLoseOrder extends BaseOrder {
  timeClosed!: Date;
  priceClosed!: number;
}
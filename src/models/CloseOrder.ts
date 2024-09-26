import { BaseOrder } from "./BaseOrder";

export class CloseOrder extends BaseOrder {
  timeClosed!: Date;
  priceClosed!: number;
}
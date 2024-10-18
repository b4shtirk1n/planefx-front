import { CloseOrder } from "../models/CloseOrder";
import { OpenOrder } from "../models/OpenOrder";

export interface OrderResponse {
  openedOrders: OpenOrder[];
  closedOrders: CloseOrder[];
}
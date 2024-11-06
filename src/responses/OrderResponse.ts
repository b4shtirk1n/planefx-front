import { CloseOrder } from "../models/CloseOrder";
import { OpenOrder } from "../models/OpenOrder";
// import { PaginationOrder } from "./PaginationOrder";

export interface OrderResponse {
  OpenedOrders: OpenOrder[];
  ClosedOrders: CloseOrder[];
  // paginationOpenedOrders: PaginationOrder<OpenOrder[]>;
  // paginationClosedOrders: PaginationOrder<CloseOrder[]>;
}
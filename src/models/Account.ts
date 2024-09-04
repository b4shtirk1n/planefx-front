import { BaseModel } from "./BaseModel";
import { OrderResponse } from "./OrderResponse";

export interface Account extends BaseModel {
	name: string;
	number: number;
	isCent: boolean;
	orders: OrderResponse;
}

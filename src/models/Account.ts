import { BaseModel } from "./BaseModel";
import { CLoseOrder } from "./CloseOrder";
import { OpenOrder } from "./OpenOrder";

export interface Account extends BaseModel {
	name: string;
	number: number;
	isCent: boolean;
	countOrders: number;
	openedOrders: OpenOrder[];
	closedOrders: CLoseOrder[];
}

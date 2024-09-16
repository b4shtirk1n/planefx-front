import { BaseModel } from "./BaseModel";
import { CLoseOrder } from "./CloseOrder";
import { OpenOrder } from "./OpenOrder";

export interface Account extends BaseModel {
	name: string;
	number: number;
	isCent: boolean;
	profit: number;
	profitToday: number;
	profitYesterday: number;
	profitWeek: number;
	drawdown: number;
	marginLevel: number;
	balance: number;
	openedOrders: OpenOrder[];
	closedOrders: CLoseOrder[];
}

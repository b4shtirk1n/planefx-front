import { BaseModel } from "./BaseModel";

export interface Subscribe extends BaseModel {
	AccountsCount: number;
	Price: number;
	Count: number;
}

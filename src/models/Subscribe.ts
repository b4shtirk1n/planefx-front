import { BaseModel } from "./BaseModel";

export interface Subscribe extends BaseModel {
	accountsCount: number;
	price: number;
	count: number;
}

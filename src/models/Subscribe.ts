import { BaseModel } from "./BaseModel";

export class Subscribe extends BaseModel {
	accountsCount!: number;
	price!: number;
	count: number = 0;
}

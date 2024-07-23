import { BaseModel } from "./BaseModel";

export interface Account extends BaseModel {
	Name: string;
	AccountNumber: number;
	IsCent: boolean;
}

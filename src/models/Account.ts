import { BaseModel } from "./BaseModel";

export interface Account extends BaseModel {
	Name: string;
	Number: number;
	Count: number;
	IsCent: boolean;
}

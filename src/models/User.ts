import { BaseModel } from "./BaseModel";

export interface User extends BaseModel {
	username: string;
	tgId: number;
	token: string;
	role: number;
	mainBalance: number;
	referralBalance: number;
	parent: number;
}

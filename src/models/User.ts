import { BaseModel } from "./BaseModel";

export interface User extends BaseModel {
	Username: string;
	TgId: number;
	Token: string;
	Role: number;
	MainBalance: number;
	ReferralBalance: number;
}

import { BaseModel } from "./BaseModel";

export class User extends BaseModel {
	username!: string;
	tgId!: number;
	token!: string;
	role!: number;
	mainBalance!: number;
	referralBalance!: number;
}

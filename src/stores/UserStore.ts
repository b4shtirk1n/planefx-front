import { create } from "zustand";
import { User } from "../models/User";
// import { api } from "../api/Axios";
import { BaseStore } from "./BaseStore";
// import { AxiosError } from "axios";
import WebApp from "@twa-dev/sdk";
import profileImg from "../assets/profile.svg";

type UserStore = BaseStore & {
	username?: string;
	tgId?: number;
	photoUrl?: string;
	user?: User;

	fetchUser(): void;
	getBalance(): string;
};

export const useUserStore = create<UserStore>((set /*get*/) => ({
	username: WebApp.initDataUnsafe.user?.username,
	tgId: WebApp.initDataUnsafe.user?.id,
	photoUrl: WebApp.initDataUnsafe.user?.photo_url ?? profileImg,
	isLoading: false,

	async fetchUser() {
		set({ isLoading: true });
		// try {
		// 	const response = await api.get("User/GetByTg", {
		// 		params: {
		// 			Id: get().tgId,
		// 		},
		// 	});
		// 	set({ user: response.data as User });
		// } catch (err) {
		// 	set({ error: (err as AxiosError).toJSON() });
		// }
		set({ isLoading: false });
	},

	getBalance() {
		return this.user!.Id.toFixed(2);
	},
}));

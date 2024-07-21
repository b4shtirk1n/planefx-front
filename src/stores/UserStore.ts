import { create } from "zustand";
import { User } from "../models/User";
import { api } from "../api/Axios";
import { BaseStore } from "./BaseStore";
import { AxiosError, AxiosResponse } from "axios";
import WebApp from "@twa-dev/sdk";
import profileImg from "../assets/profile.svg";

type UserStore = BaseStore & {
	username?: string;
	tgId?: number;
	photoUrl?: string;
	user?: User;

	fetchUser: () => void;
	getBalance: () => string;
};

export const useUserStore = create<UserStore>((set, get) => ({
	username: WebApp.initDataUnsafe.user?.username,
	tgId: WebApp.initDataUnsafe.user?.id,
	photoUrl: WebApp.initDataUnsafe.user?.photo_url ?? profileImg,
	loading: false,

	fetchUser: async () => {
		set({ loading: true });
		await api
			.get("User/GetByTg", {
				params: {
					Id: get().tgId,
				},
			})
			.then((response: AxiosResponse) => {
				console.log(response.data);
				set({ user: response.data as User });
			})
			.catch((err: AxiosError) => {
				if (err.response!.status === 400) set({ error: err.toJSON() });
				console.log(err.message);
			});
		set({ loading: false });
	},

	getBalance() {
		console.log(WebApp.initDataUnsafe.user?.photo_url);
		return this.user!.Id.toFixed(2);
	},
}));

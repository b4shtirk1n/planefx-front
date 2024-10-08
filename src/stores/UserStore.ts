import { create } from "zustand";
import { User } from "../models/User";
import { api } from "../api/Axios";
import { BaseStore } from "./BaseStore";
import { AxiosError } from "axios";
import WebApp from "@twa-dev/sdk";
import profileImg from "../assets/profile.svg";
import { persist } from "zustand/middleware";

type UserStore = BaseStore & {
	username?: string;
	tgId: number;
	photoUrl: string;
	user?: User;

	fetchUser(): void;
};

export const useUserStore = create(persist<UserStore>((set, get) => ({
	username: WebApp.initDataUnsafe.user?.username,
	tgId: WebApp.initDataUnsafe.user!.id,
	photoUrl: WebApp.initDataUnsafe.user?.photo_url ?? profileImg,
	isLoading: false,

	async fetchUser() {
		set({ isLoading: true });
		try {
			const response = await api.post("User", {
				Username: get().username,
				TgId: get().tgId,
				TimeZone: new Date().getTimezoneOffset() / -60,
			});
			set({ user: response.data as User });
		} catch (err) {
			set({ error: (err as AxiosError).toJSON() });
		} finally {
			set({ isLoading: false });
		}
	},
}), {
	name: "user",
}));

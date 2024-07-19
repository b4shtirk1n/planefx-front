import { create } from "zustand";
import { User } from "../models/User";
import { UserService } from "../services/UserService";
import WebApp from "@twa-dev/sdk";
import profileImg from "../assets/profile.svg";

type UserStore = {
	username?: string;
	tgId?: number;
	photoUrl?: string;
	user?: User;

	getBalance(): string;
};

const userService = new UserService();

export const useUserStore = create<UserStore>((set, get) => ({
	username: WebApp.initDataUnsafe.user?.username,
	tgId: WebApp.initDataUnsafe.user?.id,
	photoUrl: WebApp.initDataUnsafe.user?.photo_url ?? profileImg,

	fetchUser: async () => {
		set({ user: await userService.GetByTg(get().tgId!).then((o) => o) });
	},

	getBalance(): string {
		console.log(WebApp.initDataUnsafe.user?.photo_url);
		return this.user!.Id.toFixed(2);
	},
}));

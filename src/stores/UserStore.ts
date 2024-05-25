import { create } from "zustand";
import WebApp from "@twa-dev/sdk";
import profileImg from "../assets/profile.svg";

type UserStore = {
	username?: string;
	tgId?: number;
	photoUrl: string;
	token?: string;

	onCopyToken(): Promise<void>;
};

function getPhoto(): string {
	console.log(WebApp.initDataUnsafe.user?.photo_url);
	return WebApp.initDataUnsafe.user?.photo_url ?? profileImg;
}

export const useUserStore = create<UserStore>()(() => ({
	username: WebApp.initDataUnsafe.user?.username,
	tgId: WebApp.initDataUnsafe.user?.id,
	photoUrl: getPhoto(),
	token: "",

	async onCopyToken() {
		await navigator.clipboard.writeText(this.token!);
	},
}));

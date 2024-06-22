import { create } from "zustand";
import WebApp from "@twa-dev/sdk";
import profileImg from "../assets/profile.svg";

type UserStore = {
	username?: string;
	tgId?: number;
	photoUrl?: string;
	token: string;
	refLink?: string;

	getBalance(): string;
	getRefBalance(): string;
	onInviteFriend(): Promise<void>;
};

export const useUserStore = create<UserStore>(() => ({
	username: WebApp.initDataUnsafe.user?.username,
	tgId: WebApp.initDataUnsafe.user?.id,
	photoUrl: WebApp.initDataUnsafe.user?.photo_url ?? profileImg,
	token: "dfghjkghufegfksfkshkhkghdkgkdjwh",
	refLink: "",

	getBalance(): string {
		return new Number(200).toFixed(2);
	},

	getRefBalance(): string {
		return new Number(200).toFixed(2);
	},

	async onInviteFriend() {
		await navigator.clipboard.writeText(this.refLink!);
	},
}));

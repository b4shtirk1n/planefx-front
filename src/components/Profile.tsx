import { useUserStore } from "../stores/UserStore";
import WebApp from "@twa-dev/sdk";
import Button from "../widgets/Button";
import Info from "./Info";
import balanceImg from "../assets/balance.svg";
import refBalanceImg from "../assets/ref-balance.svg";
import "../styles/Profile.scss";

export default function Profile() {
	const username = useUserStore((s) => s.username);
	const photoUrl = useUserStore((s) => s.photoUrl);
	const balance = useUserStore((s) => s.getBalance());
	const refBalance = useUserStore((s) => s.getRefBalance());

	return (
		<div className="profile">
			<div className="user-container">
				<div className="img">
					<img src={photoUrl} />
				</div>
				<h1 className="username">{username}</h1>
				<div className="token">
					<h1>Токен: dfghjkghufegfksfkshkhkghdkgkdjwh</h1>
					<a>
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.6667 2H2.66667V10.6667"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M5.33334 4.66667H13.3333V12.6667C13.3333 13.0203 13.1929 13.3594 12.9428 13.6095C12.6928 13.8595 12.3536 14 12 14H6.66668C6.31305 14 5.97392 13.8595 5.72387 13.6095C5.47382 13.3594 5.33334 13.0203 5.33334 12.6667V4.66667Z"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
				</div>
			</div>
			<div className="info-container">
				<Info name="Баланс" amount={balance} imgUrl={balanceImg} />
				<Info name="Реф. баланс" amount={refBalance} imgUrl={refBalanceImg} />
			</div>
			<Button
				onClick={() => WebApp.showAlert(`${username}`)}
				text="Реферальная система"
			/>
			<Button
				onClick={() => WebApp.showAlert(`${photoUrl}`)}
				text="Пригласить друзей"
			/>
		</div>
	);
}

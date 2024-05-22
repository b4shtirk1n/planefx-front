import WebApp from "@twa-dev/sdk";

export default function App() {
	return (
		<>
			<h1>Добро пожаловать</h1>
			<a
				className="btn"
				onClick={() =>
					WebApp.showAlert(`${WebApp.initDataUnsafe.user?.username}`)
				}
			>
				Telegram id
			</a>
		</>
	);
}

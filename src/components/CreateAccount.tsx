import { useState } from "react";
import { useServiceStore } from "../stores/ServiceStore";
import { CreateAccountRequest } from "../models/CreateAccountRequestÏ";

type CreateAccountProps = {
	setIsModalShow(flag: boolean): void;
};

export default function CreateAccount({ setIsModalShow }: CreateAccountProps) {
	const { tickers } = useServiceStore();
	const [createAccount, setCreateAccount] = useState<CreateAccountRequest>(
		new CreateAccountRequest()
	);

	return (
		<div onClick={() => setIsModalShow(false)}>
			<div>
				<p>Название</p>
				<input
					type="text"
					value={createAccount.name}
					onChange={(e) =>
						setCreateAccount({ ...createAccount, name: e.target.value })
					}
				/>
			</div>
			<div>
				<p>Тикер</p>
				<select
					onChange={(e) =>
						setCreateAccount({ ...createAccount, ticker: e.target.value })
					}
				>
					{tickers.map((item) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</select>
			</div>
			<div>
				<p>Центовый</p>
				<input
					type="checkbox"
					checked={createAccount.isCent}
					onChange={(e) =>
						setCreateAccount({ ...createAccount, isCent: e.target.checked })
					}
				/>
			</div>
		</div>
	);
}

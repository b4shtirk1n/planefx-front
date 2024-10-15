import { useServiceStore } from "../stores/ServiceStore";
import Loading from "../widgets/Loading";
import CreateAccount from "./CreateAccount";
import "../styles/CreateAccount.scss";

type CreateAccountProps = {
	isModalShow: boolean;
	setIsModalShow(flag: boolean): void;
};

useServiceStore.getState().fetchTickers();

export default function CreateAccountModal({
	isModalShow,
	setIsModalShow,
}: CreateAccountProps) {
	const { isLoading } = useServiceStore();

	console.log(isModalShow);

	return (
		<>
			<div
				className={isModalShow ? "modal" : "hide"}
				onClick={() => setIsModalShow(false)}
			></div>
			{isLoading ? <Loading /> : <CreateAccount isModalShow />}
		</>
	);
}

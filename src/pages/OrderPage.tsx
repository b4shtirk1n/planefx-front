import { useParams } from "react-router-dom";
import { OrderParams } from "../models/OrderParams";
import OrderList from "../components/OrderList";
import Header from "../components/Header";
import BackButton from "../widgets/BackButton";

export default function OrderPage() {
	const { id } = useParams<OrderParams>();

	return (
		<section>
			<Header leftBtn={<BackButton />} text={`Счёт ${id}`} />
			<OrderList />
		</section>
	);
}
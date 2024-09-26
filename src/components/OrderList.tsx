import { useParams } from "react-router-dom";
import { OrderParams } from "../models/OrderParams";
import { useOrderStore } from "../stores/OrderStore";

export default function OrderList() {
	const { opened, closed, fetchOrders } = useOrderStore();
	const { id } = useParams<OrderParams>();

	setTimeout(() => {
		fetchOrders(Number(id));

		console.log(opened);
		console.log(closed);
	}, 500);

	return <></>;
}

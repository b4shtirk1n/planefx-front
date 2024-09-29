import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useOrderStore } from "../stores/OrderStore";
import { OrderParams } from "../models/OrderParams";
import { BackButton } from "@twa-dev/sdk/react";
import BackBtn from "../widgets/BackButton";
import OrderList from "../components/OrderList";
import Header from "../components/Header";
import Loading from "../widgets/Loading";

export default function OrderPage() {
	const { orders, fetchOrders } = useOrderStore();
	const { id } = useParams<OrderParams>();

	useEffect(() => {
		const timer = setTimeout(() => {
			fetchOrders(Number(id));
		}, 10000);

		return () => {
			clearInterval(timer);
		};
	}, [orders]);

	return (
		<section className="modal">
			<BackButton />
			<Header leftBtn={<BackBtn />} text="Счёт" />
			{orders ? <OrderList /> : <Loading />}
		</section>
	);
}

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useOrderStore } from "../stores/OrderStore";
import { OrderParams } from "../models/OrderParams";
import { BackButton } from "@twa-dev/sdk/react";
import { REQUEST_DELAY } from "../constants/ApiConst";
import OrderList from "../components/OrderList";
import Header from "../components/Header";
import Loading from "../widgets/Loading";
import PlusImg from "../widgets/PlusImg";
import CreateOrderModal from "../components/CreateOrderModal";

export default function OrderPage() {
	const [isModalShow, setIsModalShow] = useState<boolean>(false);
	const { orders, fetchOrders } = useOrderStore();
	const { id } = useParams<OrderParams>();

	useEffect(() => {
		fetchOrders(Number(id));
		const timer = setInterval(() => {
			fetchOrders(Number(id));
		}, REQUEST_DELAY);
		return () => clearInterval(timer);
	}, []);

	return (
		<section className="without-nav">
			<BackButton />
			<Header
				text="Счёт"
				rightBtn={
					<a onClick={() => setIsModalShow(true)}>
						<PlusImg />
					</a>
				}
			/>

			{orders ? (
				<>
					<CreateOrderModal
						ordersCount={orders.OpenedOrders.length}
						// ordersCount={orders.paginationOpenedOrders.data.length}
						isModalShow={isModalShow}
						setIsModalShow={setIsModalShow}
					/>
					<OrderList />
				</>
			) : (
				<Loading />
			)}
		</section>
	);
}

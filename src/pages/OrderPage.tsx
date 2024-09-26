import { BackButton } from "@twa-dev/sdk/react";
import Header from "../components/Header";
import OrderList from "../components/OrderList";

export default function OrderPage() {
	return (
		<section>
			<Header leftBtn={<BackButton />} />
			<OrderList />
		</section>
	);
}

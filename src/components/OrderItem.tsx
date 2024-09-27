import { CloseOrder } from "../models/CloseOrder";
import { OpenOrder } from "../models/OpenOrder";
import ColorSum from "../widgets/ColorSum";

type OrderProps = {
	order: OpenOrder | CloseOrder;
};

export default function OrderItem({ order }: OrderProps) {
	const isOpen = order instanceof OpenOrder;
	console.log(isOpen);

	return (
		<div className="order">
			<div className="order-header">
				<h2>{order.order}</h2>
			</div>
			<div className="account-info">
				<div>
					{isOpen ? (
						<p>последнее обновления</p>
					) : (
						<>
							<p>время закрытия</p>
							<p>цена закрытия</p>
						</>
					)}
					<p>время открытия</p>
					<p>цена открытия</p>
					<p>SL</p>
					<p>TP</p>
					<p>swap</p>
					<p>объём</p>
				</div>
				<div>
					{isOpen ? (
						<h3>{order.timeUpdate.getTime()}</h3>
					) : (
						<>
							<h3>{order.timeClosed.getTime()}</h3>
							<ColorSum Sum={order.priceClosed} Prefix="%" />
						</>
					)}
					<h3>{order.timeOpened.getTime()}</h3>
					<ColorSum Sum={order.priceOpened} Prefix="%" />
					<ColorSum Sum={order.sL} Prefix="%" />
					<ColorSum Sum={order.tP} Prefix="%" />
					<ColorSum Sum={order.swap} Prefix="$" />
					<ColorSum Sum={order.volume} Prefix="%" />
				</div>
			</div>
		</div>
	);
}

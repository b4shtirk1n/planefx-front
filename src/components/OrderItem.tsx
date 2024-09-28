import { CloseOrder } from "../models/CloseOrder";
import { OpenOrder } from "../models/OpenOrder";
import ColorSum from "../widgets/ColorSum";

type OrderProps = {
	order: OpenOrder | CloseOrder;
	isOpen: boolean;
};

export default function OrderItem({ order, isOpen }: OrderProps) {
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
						<h3>{(order as OpenOrder).timeUpdate.toLocaleString("en-GB")}</h3>
					) : (
						<>
							<h3>
								{(order as CloseOrder).timeClosed.toLocaleString("en-GB")}
							</h3>
							<ColorSum Sum={(order as CloseOrder).priceClosed} Prefix="%" />
						</>
					)}
					<h3>{order.timeOpened.toLocaleString("en-GB")}</h3>
					<ColorSum Sum={order.priceOpened} Prefix="%" />
					<ColorSum Sum={order.sl} Prefix="%" />
					<ColorSum Sum={order.tp} Prefix="%" />
					<ColorSum Sum={order.swap} Prefix="$" />
					<ColorSum Sum={order.volume} Prefix="%" />
				</div>
			</div>
		</div>
	);
}

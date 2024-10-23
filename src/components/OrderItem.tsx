import { useState } from "react";
import { CloseOrder } from "../models/CloseOrder";
import { OpenOrder } from "../models/OpenOrder";
import getDate from "../helpers/Date";
import ColorSum from "../widgets/ColorSum";
import SubImg from "../widgets/SubImg";
import Confirm from "./Confirm";
import "../styles/Order.scss";

type OrderProps = {
	order: OpenOrder | CloseOrder;
	isOpen: boolean;
	setIsModalBgShow?(flag: boolean): void;
};

export default function OrderItem({
	order,
	isOpen,
	setIsModalBgShow,
}: OrderProps) {
	const [isModalShow, setIsModalShow] = useState<boolean>(false);

	return (
		<>
			<Confirm
				id={order.id}
				isModalShow={isModalShow}
				setIsModalShow={setIsModalShow}
				setIsModalBgShow={setIsModalBgShow!}
			/>
			<div className="order">
				<div className="order-header">
					<h2>{order.order}</h2>
					<h3>{order.symbol}</h3>
					{isOpen ? (
						<a onClick={() => (setIsModalShow(true), setIsModalBgShow!(true))}>
							<SubImg />
						</a>
					) : (
						<div />
					)}
				</div>
				<div className="order-info">
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
							<h3>{getDate((order as OpenOrder).timeUpdate)}</h3>
						) : (
							<>
								<h3>{getDate((order as CloseOrder).timeClosed)}</h3>
								<ColorSum Sum={(order as CloseOrder).priceClosed} Prefix="%" />
							</>
						)}
						<h3>{getDate(order.timeOpened)}</h3>
						<ColorSum Sum={order.priceOpened} Prefix="%" />
						<ColorSum Sum={order.sl} Prefix="%" />
						<ColorSum Sum={order.tp} Prefix="%" />
						<ColorSum Sum={order.swap} Prefix="$" />
						<ColorSum Sum={order.volume} Prefix="%" />
					</div>
				</div>
			</div>
		</>
	);
}

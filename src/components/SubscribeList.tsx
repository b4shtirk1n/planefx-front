import { Swiper, SwiperSlide } from "swiper/react";
import { useSubscribeStore } from "../stores/SubscribeStore";
import { Navigation, Pagination } from "swiper/modules";
import SubscribeItem from "./SubscribeItem";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SubscribeList() {
	const { subscribes } = useSubscribeStore();

	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={30}
			navigation={true}
			pagination={true}
			loop={true}
			modules={[Navigation, Pagination]}
		>
			{subscribes.map((item) => (
				<SwiperSlide key={item.id}>
					<SubscribeItem subscribe={item} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}

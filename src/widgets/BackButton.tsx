import { useNavigate } from "react-router-dom";

export default function BackBtn() {
	const navigate = useNavigate();

	return (
		<a onClick={() => navigate(-1)}>
			<svg
				width="12"
				height="12"
				viewBox="0 0 12 12"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M3.52081 7.83331L8.18748 12.5L6.99998 13.6666L0.333313 6.99998L6.99998 0.333313L8.18748 1.49998L3.52081 6.16665H13.6666V7.83331H3.52081Z" />
			</svg>
		</a>
	);
}

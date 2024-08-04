import "../styles/Button.scss";

type ButtonProps = {
	onClick?: () => void;
	children?: React.ReactNode;
};

export default function Button({ onClick }: ButtonProps) {
	return (
		<div className="btn">
			<a onClick={onClick}></a>
		</div>
	);
}

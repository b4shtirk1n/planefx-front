import "../styles/Button.scss";

type ButtonProps = {
	onClick?: () => void;
	children?: React.ReactNode;
};

export default function Button({ onClick, children }: ButtonProps) {
	return (
		<div className="btn">
			<a onClick={onClick}>{children}</a>
		</div>
	);
}

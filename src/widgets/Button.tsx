import "../styles/Button.scss";

type ButtonProps = {
	isPrimary: boolean;
	onClick?: () => void;
	children?: React.ReactNode;
};

export default function Button({ isPrimary, onClick, children }: ButtonProps) {
	return (
		<div className="btn">
			<a className={!isPrimary ? "cancel" : ""} onClick={onClick}>
				{children}
			</a>
		</div>
	);
}

import "../styles/Button.scss";

type ButtonProps = {
	isPrimary: boolean;
	onClick?: () => void;
	children?: React.ReactNode;
};

export default function Button({ isPrimary, onClick, children }: ButtonProps) {
	return (
		<div className={isPrimary ? "btn" : "btn cancel"}>
			<a onClick={onClick}>{children}</a>
		</div>
	);
}

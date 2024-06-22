import "../styles/Button.scss";

type ButtonProps = {
	onClick?: () => void;
	text: string;
};

export default function Button({ text, onClick }: ButtonProps) {
	return (
		<div className="btn">
			<button onClick={onClick}>{text}</button>
		</div>
	);
}

import "../styles/Button.scss";

type ButtonProps = {
	onClick: () => void;
	text: string;
};

export default function Button({ text, onClick }: ButtonProps) {
	return (
		<div className="btn">
			<a onClick={onClick}>{text}</a>
		</div>
	);
}

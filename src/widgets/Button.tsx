import "../styles/Button.scss";

type ButtonProps = {
	onClick?: () => void;
	text?: string;
	child?: JSX.Element;
};

export default function Button({ text, onClick, child }: ButtonProps) {
	return (
		<div className="btn">
			<a onClick={onClick}>{text ?? child}</a>
		</div>
	);
}

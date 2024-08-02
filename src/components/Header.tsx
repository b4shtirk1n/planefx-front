import "../styles/Header.scss";

type HeaderProps = {
	backBtn?: JSX.Element;
	text?: string;
	addBtn?: JSX.Element;
};

export default function Header({ backBtn, text, addBtn }: HeaderProps) {
	return (
		<header>
			{backBtn}
			<h2>{text}</h2>
			{addBtn}
		</header>
	);
}

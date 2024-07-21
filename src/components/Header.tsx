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
			<h1>{text}</h1>
			{addBtn}
		</header>
	);
}

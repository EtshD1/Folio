import styles from "./styles.module.scss";

interface Props {
	title: string;
	children?: JSX.Element | JSX.Element[];
}

const Section = ({ children, title }: Props) => {
	return (
		<div className={styles.section}>
			<h4>{title}</h4>
			{children}
		</div>
	);
};

export default Section;

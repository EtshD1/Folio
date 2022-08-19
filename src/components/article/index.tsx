import styles from "./styles.module.scss";

interface Props {
	title: string;
	description: string;
}

const Article = ({ title, description }: Props) => {
	return (
		<div className={styles.article}>
			<div>{title}</div>
			<p>{description}</p>
		</div>
	);
};

export default Article;

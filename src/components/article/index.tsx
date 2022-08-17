interface Props {
	title: string;
	description: string;
}

const Article = ({ title, description }: Props) => {
	return (
		<div>
			<div>{title}</div>
			<p>{description}</p>
		</div>
	);
};

export default Article;

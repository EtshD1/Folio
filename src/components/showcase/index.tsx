import Item from "./Item";
import styles from "./styles.module.scss";

interface Props {}

const Showcase = (props: Props) => {
	return (
		<div className={styles.showcase}>
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
		</div>
	);
};

export default Showcase;

import { AnimatePresence } from "framer-motion";
import Item from "./Item";
import styles from "./styles.module.scss";

interface Props {}

const items = [
	{ name: "Coming Soon", description: "", id: 1 },
	{ name: "Coming Soon", description: "", id: 2 },
	{ name: "Coming Soon", description: "", id: 3 },
	{ name: "Coming Soon", description: "", id: 4 },
	{ name: "Coming Soon", description: "", id: 5 },
	{ name: "Coming Soon", description: "", id: 6 },
];

const Showcase = (props: Props) => {
	return (
		<div className={styles.showcase}>
			<AnimatePresence>
				{items.map((item, index) => {
					return (
						<Item
							name={item.name}
							description={item.description}
							key={item.id}
							delay={index * 0.025}
						/>
					);
				})}
			</AnimatePresence>
		</div>
	);
};

export default Showcase;

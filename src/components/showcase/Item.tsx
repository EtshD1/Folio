import styles from "./styles.module.scss";
import { motion } from "framer-motion";

interface Props {
	name: string;
	description: string;
	delay?: number;
}

const Item = ({ name, delay }: Props) => {
	return (
		<motion.div
			initial={{
				scale: 0,
				opacity: 0,
			}}
			animate={{
				scale: 1,
				transition: {
					delay: delay,
				},
				opacity: 1,
			}}
			whileTap={{
				scale: 1.1,
			}}
			whileHover={{
				scale: 1.1,
			}}
			className={styles.item}
		>
			{name}
		</motion.div>
	);
};

export default Item;

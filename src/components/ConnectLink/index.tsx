import Link from "next/link";
import ExternalArrow from "../../assets/Icons/ExternalArrow";
import styles from "./styles.module.scss";

interface Props {
	href: string;
	text: string;
}

const ConnectionLink = ({ href, text }: Props) => {
	return (
		<Link target="_blank" href={href}>
			<a className={styles.link}>
				{text}
				<ExternalArrow className={styles.icon} />
			</a>
		</Link>
	);
};

export default ConnectionLink;

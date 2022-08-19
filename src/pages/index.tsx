import type { NextPage } from "next";
import Head from "next/head";
import Article from "../components/article";
import ConnectionLink from "../components/ConnectLink";
import Section from "../components/section";
import Showcase from "../components/showcase";
import styles from "./../styles/main.module.scss";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.hero}>
				<h2 className={styles.name}>Etsh</h2>
				<h3>
					Hi, I am a{" "}
					<span className={styles.design}>UX Designer</span> &{" "}
					<span className={styles.develop}>NextJs Developer</span>{" "}
					from Cairo
				</h3>
			</div>
			<Showcase />
			<Section title="About">
				<p>
					I develop and design applications for the web. I’m
					passionate about web apps that provides a great experience
					for users.
				</p>
			</Section>
			<Section title="Writing">
				<div className={styles.articles}>
					<Article title="Title" description="Description" />
					<Article title="Title" description="Description" />
					<Article title="Title" description="Description" />
				</div>
			</Section>
			<Section title="Connect">
				<div className={styles.connections}>
					<ConnectionLink text="Github" href="*" />
					<ConnectionLink text="Twitter" href="*" />
					<ConnectionLink text="Email" href="*" />
				</div>
			</Section>
		</div>
	);
};

export default Home;

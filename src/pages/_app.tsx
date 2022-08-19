import type { AppProps } from "next/app";
import Head from "next/head";
import "./../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div id="app">
			<Head>
				<title>Build Web Apps with Etsh</title>
			</Head>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;

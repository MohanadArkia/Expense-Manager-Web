import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
    <>
        <Head>
            <html lang="en"/>
            <title>Expense Manager</title>
            <meta name="description" content="My app description" />
        </Head>
        <Component {...pageProps} />;
    </>
    )
}

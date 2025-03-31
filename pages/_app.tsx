import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import MyProvider from "@/store/MyProvider";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Expense Manager</title>
        <meta name="description" content="My app description" />
      </Head>
      <MyProvider>
        <Component {...pageProps} />
      </MyProvider>
    </>
  );
}

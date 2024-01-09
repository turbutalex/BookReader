import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
        <Head>
          <title>BookReader</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link rel="shortcut icon" href="/favicon.svg"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Chewy&display=swap" />
        </Head>
        <Component {...pageProps} />
    </MantineProvider>
  );
}

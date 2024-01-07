import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider, TypographyStylesProvider } from "@mantine/core";
import { theme } from "../theme";

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
      <TypographyStylesProvider>
        <Head>
          <title>Mantine Template</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link rel="shortcut icon" href="/favicon.svg"/>
        </Head>
        <Component {...pageProps} />
      </TypographyStylesProvider>
    </MantineProvider>
  );
}

import Head from "next/head";
import "../styles/styles.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          SpendWisely.in - Play the game! See what all you can BUY with
          NPR+NRC+Detention Center Money!!
        </title>
        <link
          href="https://fonts.googleapis.com/css?family=Muli:400,700,900&display=swap"
          rel="stylesheet"
        />

        <meta
          name="description"
          content="While the nation is struggling with a dwindling economy, poor
            infrastructure, unemployment rate continue to rise, people are dying
            of hunger, farmers are comitting suicide, education & healthcare is
            still not accessible to all, government is always in a deficit of
            budget. Spending resources on this NPR+NRC+CAA activity is nothing
            but squandering."
        />
        <meta
          property="og:title"
          content="Play the game! See what all you can BUY with NPR+NRC+Detention Center Money!!"
        />
        <meta property="og:url" content="https://spendwisely.in" />
        <meta property="og:site_name" content="SpendWisely" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

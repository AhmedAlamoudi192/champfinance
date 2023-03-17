import { type NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Combox from "~/components/ComboBox";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ChimpFinance</title>
        <meta name="description" content="Gain inights to financial data using ChatGPT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="text-3xl text-center my-4 font-black">
        ChimpFinance
      </header>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <Combox />
        </div>
      </div>
    </>
  );
};

export default Home;

import { type NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import Combox from "~/components/ComboBox";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ChampFinance</title>
        <meta name="description" content="Gain inights to financial data using ChatGPT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="text-5xl text-center my-8 font-black">
        ChampFinance
      </header>


      <main className="p-4 lg:text-center">
        <section className="font-bold text-4xl mb-4">
          Make better investment decisions.
        </section>
        <p className="font-semibold text-xl mb-2">
          ChampFinance summarises the latest financial data from Saudi Arabia&apos;s largest companies.
        </p>
      </main>

      <div className="flex flex-col items-center mx-4">
        <div className="flex flex-col items-center">
          <Combox />
        </div>
      </div>
    </>
  );
};

export default Home;

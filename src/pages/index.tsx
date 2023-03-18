import { Button, Card } from "flowbite-react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Combox from "~/components/ComboBox";
import { companyData } from "~/server/data";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ChampFinance</title>
        <meta name="description" content="Gain inights to financial data using ChatGPT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="text-5xl text-center my-8 p-2 font-black">
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

      <section className="flex flex-col gap-8 mb-32">
        <Card className="flex flex-col items-center mx-4 md:w-[50%] md:mx-auto shadow-xl">
          <h2 className="font-black text-indigo-800 text-4xl">Financial Statistics</h2>
          <h3>
            Make a better investment by knowing a company&apos;s balance sheet and income statement.
          </h3>
          <Combox queryType="stats" companies={companyData} />
        </Card>
        <Card className="flex flex-col items-center mx-4 md:w-[50%] md:mx-auto">
          <h2 className="font-black text-blue-800 text-4xl">Financial Statements</h2>
          <h3>
            Explore a company&apos;s financial statements and get a better overview of the company&apos;s financial health.
          </h3>
          <Combox queryType="fin_statement" companies={[
            {
              companyName: 'Aramco',
              companyRef: 0,
              companyUrl: 'https://www.saudiaramco.com/en'
            }
          ]} />
        </Card>
        <Card className="flex flex-col items-center mx-4 md:w-[50%] md:mx-auto">
          <h2 className="font-black text-sky-800 text-4xl">Market Conditions</h2>
          <h3>
            Ask about market conditions and get a summary of the latest financial data.
          </h3>
          <button
            type="button"
            className="rounded-md bg-sky-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
          >
            Learn about the current Saudi Market
          </button>
        </Card>
      </section>

      <small className="block text-center font-semibold max-auto mb-4">
        This is not financial advice. This is only for educational &amp; informational purposes.
      </small>

    </>
  );
};

export default Home;

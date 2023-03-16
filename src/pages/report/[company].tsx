import { GetServerSideProps, InferGetServerSidePropsType, type NextPage } from "next";
import Head from "next/head";
import ChatInput from "~/components/ChatInput";
import Combox from "~/components/ComboBox";
import { useState } from "react";

type Data = {
    companyName: string
}

export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (context) => {
    const companyName = context.query.company.toLowerCase()
    const data: Data = {
        companyName,
    }

    return {
        props: {
            data,
        },
    }
}


const Chat: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [message, setMessage] = useState<string>("");
    const [messages, setMessages] = useState<string[]>([]);
    return (
        <>
            <Head>
                <title>Hamoor {data.companyName} Report</title>
                <meta name="description" content="Gain inights to financial data using ChatGPT" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="text-3xl text-center my-4">
                Hamoor
            </header>
            <div>
                <p className="p-2">
                    <span className="font-black">Hamoor: </span>
                    Generating Response...
                </p>
                {messages.map((message, index) => (
                    <p key={index} className="p-2">
                        <span className="font-black">User: </span>
                        {message}
                    </p>
                ))}
                <ChatInput value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        setMessages([...messages, message]);
                        setMessage("");
                    }
                }} />
            </div>
        </>
    );
};

export default Chat;

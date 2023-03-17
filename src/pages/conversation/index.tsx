import { GetServerSideProps, InferGetServerSidePropsType, type NextPage } from "next";
import Head from "next/head";
import ChatInput from "~/components/ChatInput";
import Combox from "~/components/ComboBox";
import { useState } from "react";
import { useRouter } from "next/router";
import { api } from "~/utils/api";

type Data = {
    conversationId: string
    companyName: string
}


const Chat: NextPage = () => {
    const [message, setMessage] = useState<string>("");
    const [hamoorMessages, setHamoorMessages] = useState<string[]>([]);
    const { query } = useRouter();


    const chatQuery = api.chat.askQuestion.useQuery({
        type: 'text',
        company: query.company as string ?? 'aramco',
        question: message,
    }, {
        enabled: false
    })


    return (
        <>
            <Head>
                <title>Hamoor {query.companyName} Report</title>
                <meta name="description" content="Gain inights to financial data using ChatGPT" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="text-3xl text-center my-4">
                Hamoor
            </header>
            <div>
                <p className="p-2">
                    <span className="font-black">Hamoor: </span>
                    {chatQuery.isLoading ? 'Generating Response...' : chatQuery.data?.greeting}
                </p>
                {hamoorMessages.map((message, index) => (
                    <p key={index} className="p-2">
                        <span className="font-black">Hamoor: </span>
                        {message}
                    </p>
                ))}
                <ChatInput value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={async (e) => {
                    if (e.key === "Enter") {
                        setMessage("");
                        chatQuery.refetch()
                    }
                }} />
            </div>
        </>
    );
};

export default Chat;

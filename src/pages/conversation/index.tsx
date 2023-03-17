import { GetServerSideProps, InferGetServerSidePropsType, type NextPage } from "next";
import Head from "next/head";
import ChatInput from "~/components/ChatInput";
import Combox from "~/components/ComboBox";
import { useState } from "react";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import Lottie from "lottie-react";
import spinner from "~/components/spinner.json"
import { z } from "zod";
import { messageSchema } from "~/server/api/routers/chatRouter";


const Chat: NextPage = () => {
    const [message, setMessage] = useState<string>("");
    const [messagesArray, setMessagesArray] = useState<z.infer<typeof messageSchema>[]>([]);
    const { query } = useRouter();
    const nextMessage = api.chat.nextMessage.useMutation();

    const nonSystemMessages = messagesArray.filter((message) => message.role !== "system");


    const messagesComponent = (
        nonSystemMessages.map((message, index) => (
            <p key={index} className="p-2">
                <span className="font-black">{message.role === "user" ? "You" : "ChimpFinance"}: </span>
                {message.content}
            </p>
        ))
    )

    const chatQuery = api.chat.initialChatMessage.useQuery({
        type: 'text',
        company: query.company as string ?? 'aramco',
    }, {
        enabled: true,
        refetchInterval: false,
        refetchOnWindowFocus: false,
        onSuccess(data) {
            setMessagesArray(data?.messages)
        },
    })


    return (
        <>
            <Head>
                <title>ChampFinance {query.companyName} Report</title>
                <meta name="description" content="Gain inights to financial data using ChatGPT" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="text-3xl text-center my-4">
                ChampFinance
            </header>
            <div className="overflow-y-auto max-h-[80%] mb-64">
                {chatQuery.isLoading ? <Lottie animationData={spinner} className="p-5" /> : messagesComponent}
            </div>
            <ChatInput value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={async (e) => {
                if (e.key === "Enter") {
                    const messagesWithNewOne = [...messagesArray, { role: "user", content: message } as const]
                    setMessagesArray(messagesWithNewOne);
                    const result = await nextMessage.mutateAsync(messagesWithNewOne);
                    setMessagesArray([...messagesWithNewOne, result.message]);
                }
            }} />
        </>
    );
};

export default Chat;

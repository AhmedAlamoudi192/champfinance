import { classNames as cls } from "./ComboBox";

export default function ChatInput({ ...props }: React.ComponentProps<"input">) {
    return (
        <div className="w-full p-2 fixed bottom-4">
            <label htmlFor="chat" className="sr-only">
                Chat Text
            </label>
            <input
                type="text"
                name="chat"
                id="chat"
                className={cls("block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", props.className)}
                placeholder="Enter you message here"
                {...props}
            />
        </div>
    )
}
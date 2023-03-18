import { PaperAirplaneIcon } from "@heroicons/react/20/solid";

export default function ChatInput({ onIconClick, ...props }: React.ComponentProps<"input"> & { onIconClick: () => void | Promise<void> }) {
    return (
        <div className="p-2 bottom-4">
            <label htmlFor="chat" className="sr-only">
                Chat Text
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <input
                    type="text"
                    name="chat"
                    id="chat"
                    className="block w-full rounded-md border-0 py-5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-lg font-semibold"
                    placeholder="Ask a Question"
                    {...props}
                />
                <button className="absolute inset-y-0 right-0 flex items-center pr-3" onClick={onIconClick}>
                    <PaperAirplaneIcon className="h-5 w-5 text-gray-400 hover:text-gray-500" aria-hidden="true" />
                </button>
            </div>
        </div>
    )
}
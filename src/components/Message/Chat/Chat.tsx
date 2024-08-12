import ChatBubble from "@/UI/ChatBubble";
import styles from "@/components/Message/Inbox/styles.module.css";

export default function Chat(){

    return(
        <div className="rounded h-full overflow-hidden">
            <div className="flex flex-col items-center justify-between gap-1 p-4 shadow-md">
                <span>Leslie Alexander</span>
                <p className="mt-1 text-xs leading-5 text-gray-500">Active <time dateTime="2023-01-23T13:23Z">3h
                    ago</time></p>
            </div>
            <div className="flex flex-col  divide-gray-100 overflow-y-auto max-h-[65dvh] md:max-h-[60dvh]">
                <ul role="list" className={"divide-gray-100 overflow-auto " + styles.scrollbar}>
                    <ChatBubble id={1} message={"asdbias dasdh asohd uoashdahsd iahdi ahsidh a"} sender={"Maria SS"}
                                sentTime={"2023-01-23T13:23Z"} messageStatus={'Sent'}/>
                    <ChatBubble id={1} message={"asdbias dasdh asohd uoashdahsd iahdi ahsidh a"} sender={"Maria SS"}
                                sentTime={"2023-01-23T13:23Z"} messageStatus={'Sent'}/>
                    <ChatBubble id={1} message={"asdbias dasdh asohd uoashdahsd iahdi ahsidh a"} sender={"Maria SS"}
                                sentTime={"2023-01-23T13:23Z"} messageStatus={'Sent'}/>
                    <ChatBubble id={1} message={"asdbias dasdh asohd uoashdahsd iahdi ahsidh a"} sender={"Maria SS"}
                                sentTime={"2023-01-23T13:23Z"} messageStatus={'Sent'}/>
                    <ChatBubble id={1}
                                                                                                   message={"asdbias dasdh asohd uoashdahsd iahdi ahsidh a"}
                                                                                                   sender={"Maria SS"}
                                                                                                   sentTime={"2023-01-23T13:23Z"}
                                                                                                   messageStatus={'Sent'}/><ChatBubble
                    id={1} message={"asdbias dasdh asohd uoashdahsd iahdi ahsidh a"} sender={"Maria SS"}
                    sentTime={"2023-01-23T13:23Z"} messageStatus={'Sent'}/>
                </ul>
            </div>
            <div>
                <form>
                    <label htmlFor="search"
                           className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Type here</label>
                    <div className="relative">
                        <input type="text"
                               className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Type here"/>
                        <button type="submit"
                                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <div className="rotate-45">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                     viewBox="0 0 24 24">
                                    <path fillRule="evenodd"
                                          d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z"
                                          clipRule="evenodd"/>
                                </svg>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}
import avatar from "@/image/avatar.avif"
import chatInterface from '@/interfaces/chatBubbleInterface'
import { formatDistance } from "date-fns";
import Image from "next/image";

export default function ChatBubble(chat: chatInterface){
    const date = new Date();
    const sentDistance = formatDistance(date, chat.sentTime )

    return(
        <li className="flex items-start p-1 gap-1.5">
            <Image className="w-8 h-8 rounded-full" src={avatar} alt="Jese image"/>
            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">{chat.sender}</span>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400 hidden md:block"><time dateTime="2024-01-23T13:23Z">{sentDistance}</time></span>
                </div>
                <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{chat.message}</p>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 text-right">{chat.messageStatus}</span>
            </div>
        </li>
    )
}
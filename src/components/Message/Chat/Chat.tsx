import ChatBubble from "@/UI/ChatBubble";
import styles from "@/components/Message/Inbox/styles.module.css";
import ChatContent from "@/components/Message/Chat/ChatContent/ChatContent";
import ChatTypePlace from "@/components/Message/Chat/ChatTypePlace/ChatTypePlace";

export default function Chat(){

    return(
        <div className="rounded h-full overflow-hidden">
            <div className="flex flex-col items-center justify-between gap-1 p-4 shadow-md">
                <span>Leslie Alexander</span>
                <p className="mt-1 text-xs leading-5 text-gray-500">Active <time dateTime="2023-01-23T13:23Z">3h
                    ago</time></p>
            </div>
            <ChatContent/>
            <ChatTypePlace/>
        </div>

    )
}
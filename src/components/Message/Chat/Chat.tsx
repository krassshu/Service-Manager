import ChatBubble from "@/UI/ChatBubble";

export default function Chat(){

    return(
        <div className="rounded h-full overflow-hidden">
            <div className="flex flex-col items-center justify-between gap-1 p-4 shadow-md">
                <span>Leslie Alexander</span>
                <p className="mt-1 text-xs leading-5 text-gray-500">Active <time dateTime="2023-01-23T13:23Z">3h ago</time></p>
            </div>
            <div className="flex flex-col p-4 h-full overflow-auto">
                <span className="text-sm text-center text-neutral-400 py-8">Start chatting</span>
                <ChatBubble id={1} message={"asdbias dasdh asohd uoashdahsd iahdi ahsidh a"} sender={"Maria SS"}
                            sentTime={"2023-01-23T13:23Z"} messageStatus={'Sent'}/>
                <ChatBubble id={1} message={"asdbias dasdh asohd uoashdahsd iahdi ahsidh a"} sender={"Maria SS"}
                            sentTime={"2023-01-23T13:23Z"} messageStatus={'Sent'}/>
                <ChatBubble id={1} message={"asdbias dasdh asohd uoashdahsd iahdi ahsidh a"} sender={"Maria SS"}
                            sentTime={"2023-01-23T13:23Z"} messageStatus={'Sent'}/> <ChatBubble id={1} message={"asdbias dasdh asohd uoashdahsd iahdi ahsidh a"} sender={"Maria SS"}
                                                                                                sentTime={"2023-01-23T13:23Z"} messageStatus={'Sent'}/> <ChatBubble id={1} message={"asdbias dasdh asohd uoashdahsd iahdi ahsidh a"} sender={"Maria SS"}
                                                                                                                                                                    sentTime={"2023-01-23T13:23Z"} messageStatus={'Sent'}/> <ChatBubble id={1} message={"asdbias dasdh asohd uoashdahsd iahdi ahsidh a"} sender={"Maria SS"}
                                                                                                                                                                                                                                        sentTime={"2023-01-23T13:23Z"} messageStatus={'Sent'}/>
            </div>
        </div>
    )
}
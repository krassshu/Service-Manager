'use client'

import styles from "@/components/Message/Inbox/styles.module.css";
import ChatBubble from "@/UI/ChatBubble";

export default function ChatContent(){
    return (
        <div className="flex flex-col  divide-gray-100 overflow-y-auto max-h-[65dvh] md:max-h-[60dvh]" style={{ scrollBehavior: 'smooth' }}>
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
    )
}
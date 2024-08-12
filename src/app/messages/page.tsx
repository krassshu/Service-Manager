import Inbox from "@/components/Message/Inbox/Inbox";
import Chat from "@/components/Message/Chat/Chat";

export default function Messages(){

    return(
        <div className="h-[85dvh] grid grid-cols-4 lg:grid-cols-5 grid-rows-1 md:p-4 overflow-y-hidden">
            <div className="h-full col-span-1 py-4">
                <Inbox/>
            </div>
            <div className="h-full p-1 md:p-4 col-span-3 lg:col-span-4">
                <Chat/>
            </div>
        </div>
    )
}
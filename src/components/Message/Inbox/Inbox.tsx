import styles from './styles.module.css'
import InboxMessage from "@/UI/InboxMessage";

export default function Inbox(){

    return(
            <ul role="list" className={"divide-gray-100 overflow-auto h-full " + styles.scrollbar}>
                <InboxMessage/>
                <InboxMessage/>
                <InboxMessage/>
                <InboxMessage/>
                <InboxMessage/>
                <InboxMessage/>
                <InboxMessage/>
                <InboxMessage/>
                <InboxMessage/>
                <InboxMessage/>
                <InboxMessage/>
                <InboxMessage/>
                <InboxMessage/>
                <InboxMessage/>
                <InboxMessage/>
                <InboxMessage/>
                <InboxMessage/>
            </ul>
    )
}
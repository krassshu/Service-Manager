import Image from "next/image";
import avatar from "@/image/avatar.avif";
import Link from "next/link";

export default function DashboardMessage(){
    return(
        <ul role="list" className="divide-y divide-gray-100">
            <li>
                <Link href={"#"} className="flex justify-between gap-x-6 py-5 p-1 rounded hover:bg-gray-500 hover:bg-opacity-75">
                    <div className="flex min-w-0 gap-x-4">
                        <Image className="h-12 w-12 flex-none rounded-full bg-gray-50" src={avatar}  alt=""/>
                        <div className="min-w-0 flex-auto ">
                            <div className='flex gap-4'>
                                <p className="text-sm font-semibold leading-6 text-slate-400 dark:text-slate-200">Leslie
                                    Alexander</p>
                                <p className="mt-1 text-xs leading-5 text-gray-500">Sent: <time dateTime="2023-01-23T13:23Z">3h ago</time></p>
                            </div>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-neutral-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
                        </div>
                    </div>
                </Link>
            </li>
        </ul>
    )
}
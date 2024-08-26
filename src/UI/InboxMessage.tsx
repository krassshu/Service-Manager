import Image from "next/image";
import avatar from "@/image/avatar.avif";

export default function InboxMessage(){

    return(
            <li>
                <div tabIndex={1}
                      className="flex justify-center md:justify-between gap-x-6 py-3 md:py-5 p-2 rounded hover:bg-gray-500 hover:bg-opacity-75 cursor-pointer">
                    <div className="flex min-w-0 md:gap-x-4">
                        <Image className="h-12 w-12 flex-none rounded-full bg-gray-50" src={avatar} alt=""/>
                        <div className="min-w-0 flex-auto hidden md:block">
                            <div className='flex justify-between'>
                                <p className="text-sm font-semibold leading-6 text-slate-400 dark:text-slate-200">Leslie
                                    Alexander</p>
                                <p className="mt-1 text-xs leading-5 text-gray-500"><time
                                    dateTime="2023-01-23T13:23Z">3h</time></p>
                            </div>
                            <div className='flex justify-between items-end gap-1'>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-neutral-400">Lorem
                                    Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                    been the industry`s standard dummy text ever since the 1500s, when an unknown
                                    printer
                                    took a galley of type and scrambled it to make a type specimen book. It has survived
                                    not
                                    only five centuries, but also the leap into electronic typesetting, remaining
                                    essentially unchanged. It was popularised in the 1960s with the release of Letraset
                                    sheets containing Lorem</p>
                                <div className="flex items-center justify-center bg-blue-500 rounded-full w-5 h-5">
                                    <p className="text-xxs pl-2 pr-2">3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
    )
}
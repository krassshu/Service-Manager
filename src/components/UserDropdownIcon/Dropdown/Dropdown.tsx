'use client'

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell} from "@fortawesome/free-solid-svg-icons";
import Avatar from "@/image/avatar.avif"
import {useState} from "react";

export default function Dropdown(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
            <button  onClick={()=>{setIsOpen(!isOpen)}} type="button" className="size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                <Image className="shrink-0 size-[38px] rounded-full" src={Avatar} width={100} height={38} alt="Avatar"/>
            </button>
            {isOpen && (<div
                className={"top-10 right-0 absolute min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-slate-900 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"}
                role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-account">
                <div className="py-3 px-5 bg-gray-100 rounded-t-lg dark:bg-gray-700">
                    <p className="text-sm text-gray-500 dark:text-neutral-400">Signed in as</p>
                    <p className="text-sm font-medium text-gray-800 dark:text-neutral-200">james@site.com</p>
                </div>
                <div className="p-1.5 space-y-0.5">
                    <Link
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-slate-400 dark:hover:text-neutral-300 dark:focus:bg-slate-400 dark:focus:text-neutral-300"
                        href="#">
                        <FontAwesomeIcon icon={faBell} width={18} height={18}/>
                        Newsletter
                    </Link>
                    <Link
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-slate-400 dark:hover:text-neutral-300 dark:focus:bg-slate-400 dark:focus:text-neutral-300"
                        href="#">
                        <FontAwesomeIcon icon={faBell} width={18} height={18}/>
                        Purchases
                    </Link>
                    <Link
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-slate-400 dark:hover:text-neutral-300 dark:focus:bg-slate-400 dark:focus:text-neutral-300"
                        href="#">
                        <FontAwesomeIcon icon={faBell} width={18} height={18}/>
                        Downloads
                    </Link>
                    <Link
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-slate-400 dark:hover:text-neutral-300 dark:focus:bg-slate-400 dark:focus:text-neutral-300"
                        href="#">
                        <FontAwesomeIcon icon={faBell} width={18} height={18}/>
                        Team Account
                    </Link>
                </div>
            </div>)
            }
        </div>
    )
}
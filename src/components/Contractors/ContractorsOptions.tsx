'use client'

import Link from "next/link";
import {useState} from "react";

export default function ContractorsOptions(){

    const [isOpen, setIsOpen] = useState(false)
    const [isActive, setIsActive] = useState(false)

    const showOptions = () => {
        setIsOpen(!isOpen)
        isOpen ?setTimeout(()=>{setIsActive(false)}, 100) : setIsActive(true)
    }

    return(
        <>
            <button type="button" onClick={showOptions} className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900 dark:hover:text-neutral-200" id="options-menu-0-button" aria-expanded="false" aria-haspopup="true">
                <span className="sr-only">Open options</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
                </svg>
            </button>
            <div className={`${isOpen ? 'opacity-100 scale-100 transition-all duration-100 ease-out' : 'opacity-0 scale-95 transition-all duration-75 ease-in'} absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white dark:bg-slate-900 border dark:border-neutral-700 py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="options-menu-0-button" tabIndex="-1">
                <div className={isActive ? '' : 'hidden'}>
                <Link href="#" className="block px-3 py-1 text-sm leading-6 text-gray-900 dark:text-neutral-200 hover:dark:text-neutral-200 dark:hover:bg-slate-400 sm:hidden" role="menuitem" tabindex="-1" id="options-menu-0-item-0">Display orders<span className="sr-only">, GraphQL API</span></Link>
                <Link href="#" className="block px-3 py-1 text-sm leading-6 text-gray-900 dark:text-neutral-200 hover:dark:text-neutral-200 dark:hover:bg-slate-400" role="menuitem" tabindex="-1" id="options-menu-0-item-0">Edit<span className="sr-only">, GraphQL API</span></Link>
                <Link href="#" className="block px-3 py-1 text-sm leading-6 text-gray-900 dark:text-neutral-200 hover:dark:text-neutral-200 dark:hover:bg-slate-400" role="menuitem" tabindex="-1" id="options-menu-0-item-1">Move<span className="sr-only">, GraphQL API</span></Link>
                <Link href="#" className="block px-3 py-1 text-sm leading-6 text-gray-900 dark:text-neutral-200 hover:dark:text-neutral-200 dark:hover:bg-slate-400" role="menuitem" tabindex="-1" id="options-menu-0-item-2">Delete<span className="sr-only">, GraphQL API</span></Link>
                </div>
            </div>
        </>
    )
}
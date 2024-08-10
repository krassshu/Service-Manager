'use client'
import Link from "next/link";

import {usePathname} from "next/navigation";

export default function SidebarNav(){
    const currentPath = usePathname();

    return(
        <nav className="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
            <ul className="flex flex-col space-y-1">
                <li>
                    <Link
                        className={`${currentPath === '/' ? "bg-gray-100 dark:bg-slate-400 dark:text-white" : "text-gray-800 dark:bg-slate-900 dark:text-neutral-200"} w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm  rounded-lg hover:bg-gray-100   dark:hover:bg-slate-400 `}
                        href="/">
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                             strokeLinejoin="round">
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                            <polyline points="9 22 9 12 15 12 15 22"/>
                        </svg>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href={'/contractors'} type="button"
                          className={`${currentPath === '/contractors' ? "bg-gray-100 dark:bg-slate-400 dark:text-white" : "text-gray-800 dark:bg-slate-900 dark:text-neutral-200"}  w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm  rounded-lg hover:bg-gray-100   dark:hover:bg-slate-400 `}
                          aria-expanded="true" aria-controls="users-accordion-child">
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                             strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                        Contractors
                    </Link>
                </li>
                <li>
                    <Link href={"/tasks"}
                          className={`${currentPath === '/tasks' ? "bg-gray-100 dark:bg-slate-400 dark:text-white" : "text-gray-800 dark:bg-slate-900 dark:text-neutral-200"} w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm  rounded-lg hover:bg-gray-100   dark:hover:bg-slate-400 `}>
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="26" height="26"
                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                             strokeLinejoin="round">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z"/>
                        </svg>
                        Tasks
                    </Link>
                </li>

                <li>
                    <Link href={"/protocols"}
                          className={`${currentPath === '/protocols' ? "bg-gray-100 dark:bg-slate-400 dark:text-white" : "text-gray-800 dark:bg-slate-900 dark:text-neutral-200"} w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm  rounded-lg hover:bg-gray-100   dark:hover:bg-slate-400 `}>
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                             strokeLinejoin="round">
                            <path
                                d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"/>
                        </svg>
                        Protocols
                    </Link>
                </li>
                <li>
                    <Link
                        className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-400 dark:text-neutral-200 dark:hover:text-neutral-300"
                        href={"/calendar"}>
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                             strokeLinejoin="round">
                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                            <line x1="16" x2="16" y1="2" y2="6"/>
                            <line x1="8" x2="8" y1="2" y2="6"/>
                            <line x1="3" x2="21" y1="10" y2="10"/>
                            <path d="M8 14h.01"/>
                            <path d="M12 14h.01"/>
                            <path d="M16 14h.01"/>
                            <path d="M8 18h.01"/>
                            <path d="M12 18h.01"/>
                            <path d="M16 18h.01"/>
                        </svg>
                        Calendar
                    </Link>
                </li>
                <li>
                    <Link
                        className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300"
                        href="#">
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                             strokeLinejoin="round">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                        </svg>
                        Documentation
                    </Link>
                </li>
                <li>
                    <Link href={"/messages"}
                          className={`${currentPath === '/messages' ? "bg-gray-100 dark:bg-slate-400 dark:text-white" : "text-gray-800 dark:bg-slate-900 dark:text-neutral-200"} w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm  rounded-lg hover:bg-gray-100   dark:hover:bg-slate-400 `}>
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                             viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                             strokeLinejoin="round">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"/>
                        </svg>
                        Messages
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
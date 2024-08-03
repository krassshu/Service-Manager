'use client'

import {useState} from "react";

export default function Sort(){
    const [isDesc, setIsDesc] = useState<boolean>(false)

    return (
        <div className='flex items-end mt-2 pl-4' title={"Sort by date"}>
            <button className={`p-1 rounded-full dark:hover:bg-gray-700 transition-transform duration-250 ${isDesc? 'rotate-180' : ''}`} onClick={() => setIsDesc(!isDesc)}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M12 19V5m0 14-4-4m4 4 4-4"/>
                </svg>
            </button>
        </div>
    )
}
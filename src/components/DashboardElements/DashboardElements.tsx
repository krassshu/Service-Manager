import React from "react";

export default function DashboardElements({children, className}: Readonly<{
    children: React.ReactNode;
    className?:string
}>){


    return(
        <div className={`${className || ''} p-4 flex flex-col  rounded-lg shadow-lg bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0  dark:bg-slate-800 dark:border-neutral-700`}>
            {children}
        </div>
    )
}
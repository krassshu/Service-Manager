import React from "react";

export default function DashboardElements({children,}: Readonly<{
    children: React.ReactNode;
}>){

    return(
        <div className='p-4 flex flex-col  rounded-lg shadow-lg bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0  dark:bg-neutral-800 dark:border-neutral-700'>
            {children}
        </div>
    )
}
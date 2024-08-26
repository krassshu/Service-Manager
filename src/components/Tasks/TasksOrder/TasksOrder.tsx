import Link from "next/link";
import ContractorsOptions from "@/components/Contractors/ContractorsOptions";

export default function Tasks(){

    return (
        <li className="flex justify-between gap-x-6 py-5">
            <div className="min-w-0">
                <div className="flex items-start items-center gap-x-3">
                    <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-neutral-200">Order: <Link
                        href={'tasks/123332'}>123332</Link></p>
                    <p className="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset text-green-700 bg-green-50 ring-green-600/20"
                       title='Amount of equipment to checked'>321</p>
                    <span className="flex w-3 h-3 me-3 bg-gray-200 rounded-full" title='Status'></span>
                </div>
                <div
                    className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 dark:text-neutral-400">
                    <p className="whitespace-nowrap">Last time to start the order <time
                        dateTime="2023-03-17T00:00Z" className='font-bold'>March 17, 2023</time></p>
                    <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                        <circle cx="1" cy="1" r="1"/>
                    </svg>
                    <p className="truncate">Created by Leslie Alexander</p>
                </div>
            </div>
            <div className="flex flex-none items-center gap-x-4">
                <Link href="tasks/123332"
                      className="hidden rounded-md bg-white dark:bg-gray-800 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset border-1 ring-gray-300 hover:bg-gray-50 dark:text-neutral-200 hover:dark:text-neutral-200 dark:hover:bg-slate-400 sm:block">Display
                    order</Link>
                <div className="relative flex-none">
                    <ContractorsOptions/>
                </div>
            </div>
        </li>
    )
}
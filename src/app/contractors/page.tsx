import Link from "next/link";
import ContractorsOptions from "@/components/Contractors/ContractorsOptions";

export default function Contractors(){
    return (
        <>
            <div role="navigation" aria-label="Main" className="w-full bg-white dark:bg-gray-800 py-5 flex flex-col xl:flex-row items-start xl:items-center justify-between px-5 xl:px-10 shadow rounded-t">
                <div className="mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 lg:w-1/2">
                    <a  className="focus:outline-none  text-gray-800 dark:text-gray-100 text-lg font-bold">List of contractors</a>
                    <p className="focus:outline-none font-normal text-sm text-gray-600 dark:text-gray-100 mt-1">Uncommon people with a whole lot in common</p>
                </div>
                <div className="block lg:justify-end lg:w-auto sm:flex sm:justify-center sm:w-full   mt-3 sm:mt-2 " >
                    <button className="rounded-md bg-white dark:bg-gray-800 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset border-1 ring-gray-300 hover:bg-gray-50 dark:text-neutral-200 hover:dark:text-neutral-200 dark:hover:bg-slate-400 sm:block">Add new contractor</button>
                </div>
            </div>
            <ul role="list" className="divide-y divide-gray-100">
                <li className="flex items-center justify-between gap-x-6 py-5">
                    <div className="min-w-0">
                        <div className="flex items-start gap-x-3">
                            <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-neutral-200" ><Link href={'contractors/bydgoszcz'}>Bydgoszcz</Link></p>
                            <p className="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset text-green-700 bg-green-50 ring-green-600/20" title='Number of orders'>123</p>
                        </div>
                        <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 dark:text-neutral-400">
                            <p className="whitespace-nowrap">Added <time dateTime="2023-03-17T00:00Z">March 17, 2023</time></p>
                            <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                                <circle cx="1" cy="1" r="1" />
                            </svg>
                            <p className="truncate">Created by Leslie Alexander</p>
                        </div>
                    </div>
                    <div className="flex flex-none items-center gap-x-4">
                        <Link href="#" className="hidden rounded-md bg-white dark:bg-gray-800 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset border-1 ring-gray-300 hover:bg-gray-50 dark:text-neutral-200 hover:dark:text-neutral-200 dark:hover:bg-slate-400 sm:block">Display orders</Link>
                        <div className="relative flex-none">
                            <ContractorsOptions/>
                        </div>
                    </div>
                </li>
            </ul>
    </>

    )
}
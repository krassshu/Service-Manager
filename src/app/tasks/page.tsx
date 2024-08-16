import Link from "next/link";
import ContractorsOptions from "@/components/Contractors/ContractorsOptions";

export default function Tasks(){
    return(
        <>
            <div role="navigation" aria-label="Main"
                 className="w-full bg-white dark:bg-gray-800 py-5 flex flex-col xl:flex-row items-start xl:items-center justify-between px-5 xl:px-10 shadow rounded-t">
                <div className="mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 lg:w-1/2">
                    <a tabIndex={0} className="focus:outline-none  text-gray-800 dark:text-gray-100 text-lg font-bold">To-do
                        list/work to be done</a>
                    <p tabIndex={0}
                       className="focus:outline-none font-normal text-sm text-gray-600 dark:text-gray-100 mt-1">Uncommon
                        people with a whole lot in common</p>
                </div>
                <div className="lg:hidden w-full relative mt-2 md:mt-4">
                    <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector"
                             width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#a0aec0" fill="none"
                             strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <polyline points="8 9 12 5 16 9"/>
                            <polyline points="16 15 12 19 8 15"/>
                        </svg>
                    </div>
                    <select aria-label="Selected tab"
                            className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 dark:text-gray-100 appearance-none bg-transparent relative z-10">
                        <option selected={undefined} className="text-sm text-gray-600 dark:text-gray-100">Active</option>
                        <option className="text-sm text-gray-600 dark:text-gray-100">Inactive</option>
                        <option className="text-sm text-gray-600 dark:text-gray-100">In progress</option>
                        <option className="text-sm text-gray-600 dark:text-gray-100">Done</option>
                    </select>
                </div>
                <ul role="list" className="hidden lg:flex items-center lg:mt-6 xl:mt-0">
                    <button role="listitem" tabIndex={0}
                            className=" focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:outline-none font-normal flex justify-center items-center py-2 px-4 rounded mr-4 xl:mr-0 xl:ml-0 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-sm">Active
                    </button>
                    <button role="listitem" tabIndex={0}
                            className=" focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:outline-none cursor-pointer font-normal flex justify-center items-center py-2 px-4 rounded mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 text-sm">Inactive
                    </button>
                    <button role="listitem" tabIndex={0}
                            className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:outline-none cursor-pointer font-normal flex justify-center items-center py-2 px-4 rounded mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 text-sm">In
                        progress
                    </button>
                    <button role="listitem" tabIndex={0}
                            className=" focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:outline-none cursor-pointer font-normal flex justify-center items-center py-2 px-4 rounded mr-4 sm:mr-0 md:mr-0 lg:mr-0 xl:mr-0 sm:ml-4 md:ml-4 lg:ml-4 xl:ml-4 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 text-sm">Done
                    </button>
                </ul>
                <div className="block lg:justify-end lg:w-auto sm:flex sm:justify-center sm:w-full   mt-3 sm:mt-2 ">
                    <button
                        className="rounded-md bg-white dark:bg-gray-800 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset border-1 ring-gray-300 hover:bg-gray-50 dark:text-neutral-200 hover:dark:text-neutral-200 dark:hover:bg-slate-400 sm:block">Add
                        new order
                    </button>
                </div>
            </div>
            <ul role="list" className="divide-y divide-gray-100">
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
                        <Link href="tasks/123332" className="hidden rounded-md bg-white dark:bg-gray-800 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset border-1 ring-gray-300 hover:bg-gray-50 dark:text-neutral-200 hover:dark:text-neutral-200 dark:hover:bg-slate-400 sm:block">Display order</Link>
                        <div className="relative flex-none">
                            <ContractorsOptions/>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}
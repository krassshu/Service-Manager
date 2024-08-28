import Image from "next/image";


export default function Protocols(){

    return(
            <a href="#" target="_blank" className="p-2 max-w-28 flex flex-col  rounded-lg shadow-lg bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0  dark:bg-slate-800 dark:border-neutral-700 transition-transform duration-200 hover:scale-95">
                <div className="bg-amber-50 w-full h-[100px] ">
                    {/*<Image width={24} height={24} src={"/"} alt={""}/>*/}
                </div>
                <div>
                    <span className="text-sm font-semibold leading-6 text-gray-900 dark:text-neutral-200">Title</span>
                    <time
                        className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 dark:text-neutral-400"
                        dateTime="2024-03-22T00:00Z">22.03.2024
                    </time>
                </div>
            </a>
    )
}
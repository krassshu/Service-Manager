import CalendarUtil from "@/utils/CalendarUtil/CalendarUtil";

export default function Calendar(){

    return(
        <div className='grid gap-4 xl:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-rows-3'>
           <div className='p-4 flex flex-col xl:col-span-2 rounded-lg shadow-lg bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0  dark:bg-slate-900 dark:border-neutral-700'>
                <CalendarUtil initialView='dayGridMonth'/>
           </div>
           <div className='p-4 flex flex-col xl:col-span-1 row-span-1 rounded-lg shadow-lg bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0  dark:bg-slate-900 dark:border-neutral-700'>
               1
           </div>
           <div className='p-4 flex flex-col xl:col-span-3 row-span-0 rounded-lg shadow-lg bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0  dark:bg-slate-900 dark:border-neutral-700'>
               2
           </div>
        </div>
    )
}


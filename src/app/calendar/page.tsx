import CalendarUtil from "@/components/Calendar/CalendarUtil/CalendarUtil";
import CalendarEvents from "@/components/Calendar/CalendarEvents/CalendarEvents";

export default function CalendarPage(){

    return (
        <div className='grid gap-4 xl:grid-cols-3 md:grid-cols-1 sm:grid-cols-1'>
            <div
                className='p-4 flex flex-col xl:col-span-2 rounded-lg shadow-lg bg-white border-e border-gray-200 dark:bg-slate-900 dark:border-neutral-700'>
                <CalendarUtil/>
            </div>
            <div
                className='p-4 flex flex-col xl:row-span-1 xl:col-span-1 rounded-lg shadow-lg bg-white border-e border-gray-200 dark:bg-slate-900 dark:border-neutral-700'>
                <CalendarEvents/>
            </div>
        </div>

    )
}


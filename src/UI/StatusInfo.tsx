export default function StatusInfo(){

    return(<div
        className="w-full bg-white dark:bg-gray-800 py-5 flex flex-row items-center justify-end px-5 xl:px-10 shadow rounded-b-lg">
        <div className='flex justify-center items-center pl-3'>
            <span className="flex w-3 h-3 me-3 bg-green-600 rounded-full" title='Status'></span>
            <span className="text-sm">Done</span>
        </div>
        <div className='flex justify-center items-center pl-3'>
            <span className="flex w-3 h-3 me-3 bg-gray-200 rounded-full" title='Status'></span>
            <span className="text-sm">Inactive</span>
        </div>
        <div className='flex justify-center items-center pl-3'>
            <span className="flex w-3 h-3 me-3 bg-orange-400 rounded-full" title='Status'></span>
            <span className="text-sm">In progress</span>
        </div>
    </div>)
}
import SearchInsideInput from "@/components/SearchInsideInput/SearchInsideInput";
import FilterProtocols from "@/components/Protocols/FilterProtocols";
import Sort from "@/components/Sort/Sort";
import DeviceElementToCheck from "@/components/DeviceElementToCheck/DeviceElementToCheck";
import StatusInfo from "@/UI/StatusInfo";
import ModalContext from "@/context/ModalContext";

export default function TasksOrder(){

    return(
        <>
            <div>
                <div
                    className="w-full bg-white dark:bg-gray-800 py-5 flex flex-col xl:flex-row xl:items-center justify-between px-5 xl:px-10 rounded-t">
                    <div className="flex items-center justify-center lg:justify-start gap-4">
                        <h2>Bydgoszcz</h2>
                        <div className="sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 ">
                            <SearchInsideInput/>
                        </div>
                    </div>
                    <div
                        className="flex items-center lg:justify-end lg:w-auto sm:justify-center sm:w-full mt-3 sm:mt-2 ">
                        <div className="lg:hidden w-full relative mt-2 md:mt-4">
                            <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="icon icon-tabler icon-tabler-selector"
                                     width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#a0aec0"
                                     fill="none"
                                     strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                    <polyline points="8 9 12 5 16 9"/>
                                    <polyline points="16 15 12 19 8 15"/>
                                </svg>
                            </div>
                            <select aria-label="Selected tab"
                                    className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 dark:text-gray-100 appearance-none bg-transparent relative z-10">
                                <option value="" className="text-sm text-gray-600 dark:text-gray-100">Active</option>
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
                        <Sort/>
                    </div>
                </div>
                <StatusInfo/>
            </div>
            <ul role="list" className="divide-y divide-gray-100">
                    <DeviceElementToCheck/>
                    <DeviceElementToCheck/>
            </ul>
        </>
    )
}
import ProtocolFormFields from "@/components/ProtocolForm/ProtocolFormFields/ProtocolFormFields";
import {useContext} from "react";
import {ModalContext} from "@/context/ModalProvider";

export default function ProtocolForm(){
    const {  toggleModal } = useContext(ModalContext);

    return(
        <div className="p-4 overflow-y-auto rounded bg-white dark:bg-gray-800 max-h-screen w-screen md:max-w-screen-md relative">
            <form className="flex flex-col gap-2">
                <div className="text-center leading-tight flex">
                    <h2 className="font-bold mr-1">Protocol to device:</h2>
                    <span className="italic">Ascor AP14, SN: 230220392739</span>
                </div>
                <div className="flex items-center">
                    <label htmlFor="protocol" className="w-full">Chang protocol type</label>
                    <select id="protocol" name="protocol"
                            className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected value="electric">Electric</option>
                        <option value="endoscopy">Endoscopy</option>
                        <option value="universal">Universal</option>
                    </select>
                </div>
                <ProtocolFormFields/>
                <div className="text-right">
                    <button className="px-3 py-1 bg-green-900 hover:bg-green-950 rounded mr-3">Save</button>
                    <button className="px-3 py-1 bg-red-800 hover:bg-red-950 rounded">Cancel</button>
                </div>
            </form>
            <button onClick={toggleModal}
                    className="absolute top-3 right-3 hover:rotate-180 transition-all ease-in-out duration-200">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M6 18 17.94 6M18 18 6.06 6"/>
                </svg>
            </button>
        </div>
    )
}
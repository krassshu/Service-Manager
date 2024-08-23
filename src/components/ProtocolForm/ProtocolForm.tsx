import ProtocolFormFields from "@/components/ProtocolForm/ProtocolFormFields/ProtocolFormFields";


export default function ProtocolForm(){

    return(
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
    )
}
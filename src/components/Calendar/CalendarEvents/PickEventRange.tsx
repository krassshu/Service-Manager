'use client'

import DataPicker from "@/UI/DataPicker";
import {useState} from "react";

export default function PickEventRange(){
    const [isAllDay, setIsAllDay] = useState(false);

    const handleAllDay = () => {
        setIsAllDay(!isAllDay);
    }

    return(<>
        <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pick event range:</span>
        <DataPicker fromDisable={false} toDisable={isAllDay} allDisable={false}/>
        <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 mt-4">
            <input onClick={handleAllDay} id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox"
                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label htmlFor="bordered-checkbox-1"
                   className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Select all day event
            </label>
        </div>
    </>)
}
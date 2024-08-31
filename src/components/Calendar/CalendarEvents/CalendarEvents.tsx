import DataPicker from "@/UI/DataPicker";
import PickEventRange from "@/components/Calendar/CalendarEvents/PickEventRange";
import SelectAndShowSelected from "@/UI/SelectAndShowSelected";
import Button from "@/UI/Button";
import SelectEventColor from "@/components/Calendar/CalendarEvents/SelectEventColor";


export default function CalendarEvents(){

    return(
        <div>
            <h2 className="text-lg">Create new event</h2>
                <form className="mt-4">
                    <div className="mb-6">
                        <label htmlFor="title"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event
                            title:</label>
                        <input type="text" id="title"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div className="mb-6">
                        <PickEventRange/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Add description:
                        </label>
                        <textarea id="message" rows={4}
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg resize-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Write description of event..."></textarea>
                    </div>
                    <div className="mb-6">
                        <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Select event color:
                        </span>
                        <SelectEventColor/>
                    </div>
                    <div className="mb-6">
                        <SelectAndShowSelected placeholder="collabolator"/>
                    </div>
                    <div className="mb-6 flex justify-end">
                        <Button>Save</Button>
                    </div>
                </form>

        </div>
    )
}
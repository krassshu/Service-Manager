export default function ProtocolFormFields(){

    return(
                <table className="table-auto border-collapse border border-slate-500">
                    <tbody>
                        <tr className="text-md">
                            <td className="border border-slate-700 whitespace-nowrap px-1">The Sliding</td>
                            <td className="w-full border border-slate-700">
                                <input type="text"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:border-transparent"/>
                            </td>
                            <td className="border border-slate-700">
                                <select id="protocol" name="protocol"
                                        className="block p-2 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected value="OK">OK</option>
                                    <option value="defect">Defect</option>
                                    <option value="NA">NA</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
    )
}
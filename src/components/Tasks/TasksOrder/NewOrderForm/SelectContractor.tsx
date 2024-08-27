import Select from "react-tailwindcss-select";
import {useState} from "react";

const options = [
    { value: "fox", label: "🦊 Fox" },
    { value: "Butterfly", label: "🦋 Butterfly" },
    { value: "Honeybee", label: "🐝 Honeybee" }
];

export default function SelectContractor(){
    const [contractor, setContractor] = useState(null);

    const handleChange = (value:any) => {
        console.log("value:", value);
        setContractor(value);
    };

    return (
        <Select
            classNames={{
                menu: "dark:bg-gray-800  pointer",
                menuButton: () => "grow pl-2.5 py-2 pr-2 flex flex-wrap gap-1 border rounded cursor-pointer dark:bg-gray-800 dark:border-gray-700",
                searchBox: "dark:bg-gray-800 dark:border-gray-700 w-full py-2 pl-8 text-sm text-gray-500 bg-gray-100 border border-gray-200 rounded focus:border-gray-200 focus:ring-0 focus:outline-none"
            }}
            primaryColor={"indigo"}
            value={contractor}
            onChange={handleChange}
            options={options}
            isSearchable={true}
            isMultiple={false}
            placeholder={"Select contractor"}

        />
    )
}
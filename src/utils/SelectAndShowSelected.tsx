'use client'

import Select from "react-tailwindcss-select";
import { useState } from "react";

const initialOptions = [
    { value: "fox", label: " Fox" },
    { value: "Butterfly", label: " Butterfly" },
    { value: "Honeybee", label: " Honeybee" },
];

export interface selectMultiple {
    placeholder:string
}

export default function SelectAndShowSelected({placeholder}:selectMultiple) {
    const [sected, setSelected] = useState<any[]>([]);

    const [availableOptions, setAvailableOptions] = useState(initialOptions);

    const handleChange = (selectedOption: any) => {
        if (selectedOption) {
            setSelected((prevDevices) => [...prevDevices, selectedOption]);

            const updatedOptions = availableOptions.filter(
                (option) => option.value !== selectedOption.value
            );
            setAvailableOptions(updatedOptions);
        }
    };

    const removeDevice = (deviceToRemove: any) => {
        setSelected((prevDevices) =>
            prevDevices.filter((device) => device.value !== deviceToRemove.value)
        );
        setAvailableOptions([...availableOptions, deviceToRemove]);
    };
    return (
        <div>
            <Select
                classNames={{
                    menu: "dark:bg-gray-800 pointer",
                    menuButton: () =>
                        "grow pl-2.5 py-2 pr-2 flex flex-wrap gap-1 border rounded cursor-pointer dark:bg-gray-800 dark:border-gray-700",
                    searchBox:
                        "dark:bg-gray-800 dark:border-gray-700 w-full py-2 pl-8 text-sm text-gray-500 bg-gray-100 border border-gray-200 rounded focus:border-gray-200 focus:ring-0 focus:outline-none",
                }}
                primaryColor={"indigo"}
                onChange={handleChange}
                options={availableOptions}
                isSearchable={true}
                isMultiple={false}
                placeholder={"Select "+placeholder}
                value={null}
            />

            {sected.length > 0 && (
                <div className="mt-4">
                    <h3>Selected {placeholder}s:</h3>
                    <ul className="divide-y divide-gray-200">
                        {sected.map((el) => (
                            <li className="flex justify-between py-1" key={el.value}>
                                {el.label}
                                <button type="button" onClick={() => removeDevice(el)}>
                                    <svg
                                        className="w-6 h-6 text-red-800 dark:text-red-800"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                                        />
                                    </svg>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
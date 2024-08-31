'use client'

import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";

export const options = {
    title: "",
    autoHide: true,
    todayBtn: true,
    clearBtn: false,
    maxDate: new Date("2090-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
        background: "bg-gray-50 dark:bg-gray-800",
        todayBtn: "",
        clearBtn: "",
        icons: "px-4",
        text: "",
        disabledText: "opacity-20",
        input: "",
        inputIcon: "",
        selected: "",
    },
    icons: {
        prev: () => <span>{"<"}</span>,
        next: () => <span>{">"}</span>,
    },
    datepickerClassNames: "top-9 z-[9999999]",
    defaultDate: new Date(),
    language: "en",
    disabledDates: [],
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Select Date",
    inputDateFormatProp: {
        day: "numeric",
        month: "2-digit",
        year: "numeric"
    }
};

export interface dataPickerProps {
    fromDisable: boolean,
    toDisable: boolean,
    allDisable: boolean,
}

export default function DataPicker({ fromDisable, toDisable, allDisable }: dataPickerProps) {
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);
    const [showStart, setShowStart] = useState(false);
    const [showEnd, setShowEnd] = useState(false);

    const handleStartDateChange = (selectedDate: Date) => {
        setStartDate(selectedDate);
        if (!endDate || selectedDate > endDate) {
            setEndDate(selectedDate);
        }
    };

    const handleEndDateChange = (selectedDate: Date) => {
        setEndDate(selectedDate);
    };

    return (
        <div className="relative">
            <div className="flex gap-4 items-center">
                <div className="relative">
                    <Datepicker
                        //@ts-ignore
                        options={options}
                        onChange={handleStartDateChange}
                        value={startDate}
                        setShow={setShowStart}
                        show={showStart}
                    />
                    {(fromDisable || allDisable) && (
                        <div className="absolute inset-0 bg-gray-900 rounded-lg bg-opacity-10 dark:bg-opacity-50 cursor-not-allowed"></div>
                    )}
                </div>
                <span>to</span>
                <div className="relative">
                    <Datepicker
                        //@ts-ignore
                        options={{
                            ...options,
                            datepickerClassNames: "top-9 right-0 z-[9999999]",
                            minDate: startDate || options.minDate,
                        }}
                        onChange={handleEndDateChange}
                        value={endDate}
                        setShow={setShowEnd}
                        show={showEnd}
                    />
                    {(toDisable || allDisable) && (
                        <div className="absolute inset-0 bg-gray-900 rounded-lg bg-opacity-10 dark:bg-opacity-50 cursor-not-allowed"></div>
                    )}
                </div>
            </div>
        </div>
    );
}

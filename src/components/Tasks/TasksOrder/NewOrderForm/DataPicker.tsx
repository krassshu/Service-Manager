import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";

const options = {
    title: "",
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    clearBtnText: "Clear",
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
        background: "bg-gray-700 dark:bg-gray-800",
        todayBtn: "",
        clearBtn: "",
        icons: "px-4",
        text: "",
        disabledText: "bg-red-500",
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

export default function DataPicker() {
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
                <Datepicker
                    options={options}
                    onChange={handleStartDateChange}
                    value={startDate}
                    setShow={setShowStart}
                    show={showStart}
                />
                <span>to</span>
                <Datepicker
                    options={{
                        ...options,
                        minDate: startDate || options.minDate,
                    }}
                    onChange={handleEndDateChange}
                    value={endDate}
                    setShow={setShowEnd}
                    show={showEnd}
                />
            </div>
        </div>
    );
}

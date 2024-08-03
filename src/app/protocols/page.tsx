import Protocols from "@/components/Protocols/Protocols";
import SearchProtocols from "@/components/Protocols/SearchProtocols";
import FilterProtocols from "@/components/Protocols/FilterProtocols";
import Sort from "@/components/Sort/Sort";

export default function page() {
    const data = [
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 3 },
        { id: 4, value: 4 },
        { id: 5, value: 5 },
        { id: 6, value: 6 },
        { id: 7, value: 7 },
        { id: 8, value: 8 },
        { id: 9, value: 9 },
        { id: 10, value: 9 },
        { id: 11, value: 9 },
        { id: 12, value: 9 },
        { id: 13, value: 9 },
        { id: 14, value: 9 },
        { id: 15, value: 9 },
        { id: 16, value: 9 },
    ];

    return (
        <>
            <div className="w-full bg-white dark:bg-gray-800 py-5 flex flex-col xl:flex-row xl:items-center justify-between px-5 xl:px-10 shadow rounded-t">
                <div className="mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 ">
                    <SearchProtocols/>
                </div>
                <div className="flex items-center lg:justify-end lg:w-auto sm:justify-center sm:w-full mt-3 sm:mt-2 ">
                    <FilterProtocols/>
                    <Sort/>
                </div>
            </div>

            <div className="grid grid-cols-3 xs:grid-cols-5 md:grid-cols-7 xl:grid-cols-9 2xl:grid-cols-11 gap-4">
                {data.map((item, index) => (
                    <Protocols key={index}/>
                ))}
            </div>
        </>
    );
}


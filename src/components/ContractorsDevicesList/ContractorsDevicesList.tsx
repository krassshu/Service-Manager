export default function ContractorsDevicesList(){

    return(
        <div className="md:w-full p-4 bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 md:bg-transparent md:rounded-none rounded flex flex-col lg:flex-row ">
            <div className={"lg:inline-block lg:w-full lg:max-w-44 pr-1"}>
                <span className="font-bold lg:hidden">Producer: </span>
                <span>Ascor</span>
            </div>
            <div className={"lg:inline-block lg:w-full lg:max-w-44 pr-1"}>
                <span className="font-bold lg:hidden">Model: </span>
                <span>AP14</span>
            </div>
            <div className={"lg:inline-block lg:w-full lg:max-w-44 pr-1"}>
                <span className="font-bold lg:hidden">Type: </span>
                <span>Infusion pupm</span>
            </div>
            <div className={"lg:inline-block lg:w-full lg:max-w-56 pr-1"}>
                <span className="font-bold lg:hidden">SN: </span>
                <span>14+18883720029</span>
            </div>
            <div className={"lg:inline-block lg:w-full lg:max-w-44 pr-1"}>
                <span className="font-bold lg:hidden">Department: </span>
                <span>Operation Hall</span>
            </div>
            <div className={"lg:inline-block lg:w-full lg:max-w-44 pr-1"}>
                <span className="font-bold lg:hidden">Validity of review: </span>
                <span>17/03/2025</span>
            </div>
        </div>
    )
}
import SearchInsideInput from "@/components/SearchInsideInput/SearchInsideInput";
import Sort from "@/components/Sort/Sort";
import ContractorsDevicesListHead from "@/components/ContractorsDevicesList/ContractorsDevicesListHead";
import ContractorsDevicesList from "@/components/ContractorsDevicesList/ContractorsDevicesList";
import ContractorsSelect from "@/components/ContractorsDevicesList/ContractorsSelect";

export default function ContractorDevices(){

    return(
        <>
                <div
                    className="w-full bg-white dark:bg-gray-800 py-5 flex flex-col xl:flex-row xl:items-center justify-between px-5 xl:px-10 rounded-t">
                    <div className="flex items-center justify-center lg:justify-start gap-4">
                        <h2>Bydgoszcz</h2>
                        <div className="sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 ">
                            <SearchInsideInput/>
                        </div>
                    </div>
                    <ContractorsSelect/>
                </div>
            <div>
                <div className="hidden lg:block ">
                    <ContractorsDevicesListHead/>
                </div>
                <div role="list" className="lg:divide-y divide-gray-100 grid grid-cols-1 gap-1.5 sm:grid-cols-2 md:grid-cols-3 lg:block">
                    <ContractorsDevicesList/>
                    <ContractorsDevicesList/>
                    <ContractorsDevicesList/>
                </div>
            </div>
        </>
    )
}
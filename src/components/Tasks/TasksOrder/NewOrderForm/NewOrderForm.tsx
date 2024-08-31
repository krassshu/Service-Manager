'use client'
import DataPicker from "@/UI/DataPicker";
import SelectContractor from "@/components/Tasks/TasksOrder/NewOrderForm/SelectContractor";
import SelectDevice from "@/components/Tasks/TasksOrder/NewOrderForm/SelectDevice/SelectDevice";
import Button from "@/UI/Button";
import {useModal} from "@/context/ModalContext";


export default function NewOrderForm(){
    const { closeModal } = useModal();
    return(
        <div className="mt-6 min-h-[50vh]">
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg">Create new order</h2>
                <div className="px-4 py-1 border rounded border-gray-500 bg-gray-300 dark:bg-gray-600 dark:text-gray-100" title={"Order number: "+ "1234322"}><span>1234322</span></div>
            </div>
            <form className='flex flex-col gap-3'>
                <div>
                    <span>Select date</span>
                    <DataPicker fromDisable={false} toDisable={false} allDisable={false}/>
                </div>
                <div>
                    <span>Select contractor</span>
                    <SelectContractor/>
                </div>
                <div>
                    <span>Select device</span>
                    <SelectDevice/>
                </div>
                <div className={'flex justify-end gap-4 mt-4'}>
                    <button type={"button"} onClick={closeModal}
                            className={'px-2 border border-red-900 rounded-md hover:bg-red-800 hover:text-gray-50'}>Cancel
                    </button>
                    <div>
                        <Button>Save</Button>
                    </div>
                </div>
            </form>
        </div>

    )
}
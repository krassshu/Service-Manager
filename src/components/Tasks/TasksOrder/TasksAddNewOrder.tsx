'use client'

import {useModal} from "@/context/ModalContext";
import NewOrderForm from "@/components/Tasks/TasksOrder/NewOrderForm/NewOrderForm";

export default function TasksAddNewOrder(){
    const { openModal } = useModal();

    const handleOpenModal = () => {
        openModal(<NewOrderForm/>);
    };
    return (
        <button
            onClick={handleOpenModal}
            className="rounded-md bg-white dark:bg-gray-800 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset border-1 ring-gray-300 hover:bg-gray-50 dark:text-neutral-200 hover:dark:text-neutral-200 dark:hover:bg-slate-400 sm:block">Add
            new order
        </button>
    )
}
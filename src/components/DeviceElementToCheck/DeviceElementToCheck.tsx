'use client'

import Button from "@/UI/Button"
import {useContext} from "react";
import {ModalContext} from "@/context/ModalProvider";

export default function DeviceElementToCheck(){

    const { toggleModal } = useContext(ModalContext);

    return (

            <li className="flex items-center justify-between gap-x-6 py-5">
                <div className="min-w-0">
                    <div className="flex items-center gap-x-3">
                        <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-neutral-200">Producer: XYZ</p>
                        <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-neutral-200">Model: XYZ</p>
                        <span className="flex w-3 h-3 me-3 bg-gray-200 rounded-full" title='Status'></span>
                    </div>
                    <div
                        className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500 dark:text-neutral-400">
                        <p className="truncate"><b>SN: </b>2312312312312</p>
                        <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                            <circle cx="1" cy="1" r="1"/>
                        </svg>
                        <p className="whitespace-nowrap"><b>Department: </b>IDK name</p>
                    </div>
                </div>
                <div className="flex flex-none items-center gap-x-4">
                    <div onClick={toggleModal}>
                        <Button>Complete the protocol</Button>
                    </div>
                    <div className="relative flex-none">
                        <Button>Edit</Button>
                    </div>
                </div>
            </li>
    )
}
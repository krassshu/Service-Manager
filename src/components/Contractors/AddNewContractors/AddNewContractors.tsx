'use client'

import Button from "@/UI/Button";
import {useModal} from "@/context/ModalContext";
import AddNewContractorForm from "@/components/Contractors/AddNewContractorForm/AddNewContractorForm";

export default function AddNewContractors(){

    const {openModal} = useModal();

    const handleOpenModal = () => {
        openModal(<AddNewContractorForm/>)
    }

    return(
        <div onClick={handleOpenModal}>
            <Button>Add new contractor</Button>
        </div>
    )
}
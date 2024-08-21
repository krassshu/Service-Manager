"use client"

import Modal from "react-modal";
import {useContext, useEffect} from "react";
import {ModalContext} from "@/context/ModalProvider";
import ProtocolForm from "@/components/ProtocolForm/ProtocolForm";

const customStyles = {
    overlay:{
        zIndex: "100",
        background: 'rgba(0,0,0,0.58)',
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        padding: 0,
        marginRight: '-50%',
        background: 'rgba(0,0,0,0)',
        border: 'none',
        transform: 'translate(-50%, -50%)',
    },
};

export default function ModalKeeper(){
    const { isModalOpen, toggleModal } = useContext(ModalContext);

    return(
        <Modal isOpen={isModalOpen}
               onRequestClose={toggleModal}
               style={customStyles}
               closeTimeoutMS={200}>
            <ProtocolForm/>
        </Modal>
    )
}


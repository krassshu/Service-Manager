'use client'

import {createContext, useState} from "react";

export const ModalContext = createContext({
    isModalOpen: false,
    toggleModal: () =>{}
})

export default function ModalProvider({children}:{children: React.ReactNode}){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(prevState => !prevState);
    }

    return (
        <ModalContext.Provider value={{ isModalOpen, toggleModal }}>
            {children}
        </ModalContext.Provider>
    )
}

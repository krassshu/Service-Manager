'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextProps {
    isModalOpen: boolean;
    modalContent: ReactNode | undefined;
    openModal: (content: ReactNode) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps>({
    isModalOpen: false,
    modalContent: undefined,
    openModal: () => {},
    closeModal: () => {},
});

export const useModal = () => useContext(ModalContext);

export default function ModalProvider({ children }: { children: React.ReactNode }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<ReactNode | undefined>(undefined);

    const openModal = (content: ReactNode) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setModalContent(undefined), 200);
    };

    return (
        <ModalContext.Provider value={{ isModalOpen, modalContent, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
}

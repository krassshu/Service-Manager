'use client';

import Modal from 'react-modal';
import { useModal } from '@/context/ModalContext';

export default function ModalComponent() {
    const { isModalOpen, closeModal, modalContent } = useModal();

    const customStyles = {
        overlay: {
            zIndex: 100,
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

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={200}
        >
            <div
                className="p-4 overflow-y-auto rounded bg-white dark:bg-gray-800 max-h-screen w-screen md:max-w-screen-md relative">
                {modalContent}
                <button onClick={closeModal}
                        className="absolute top-3 right-3 hover:rotate-180 transition-all ease-in-out duration-200">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M6 18 17.94 6M18 18 6.06 6"/>
                    </svg>
                </button>
            </div>
        </Modal>
    );
}

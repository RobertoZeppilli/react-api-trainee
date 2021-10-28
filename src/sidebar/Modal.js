import React from 'react'
import { useGlobalContext } from './context'
import { FaTimes } from 'react-icons/fa'

const Modal = () => {
    const { isModalOpen, closeModal } = useGlobalContext();

    return (
        <>
            {isModalOpen && <div className="overlay">
                <div className="modal">
                    <p>The modal</p>
                    <button className="btn close-modal" onClick={closeModal}>
                        <FaTimes />
                    </button>
                </div>
            </div>}
        </>
    )
}

export default Modal

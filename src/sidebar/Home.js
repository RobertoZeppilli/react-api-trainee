import React from 'react'
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Home = () => {
    const { isSidebarOpen, openSidebar, openModal } = useGlobalContext()

    return (
        <div className="home">
            <button type="button" className={`${!isSidebarOpen ? 'btn sidebar-btn' : 'none'}`} onClick={openSidebar}>
                <FaBars />
            </button>
            <button type="button" className="modal-btn btn" onClick={openModal}>
                open modal
            </button>
        </div>
    )
}

export default Home

import React from 'react'
import { useGlobalContext } from './context'
import { links, social } from './data'
import { FaTimes } from 'react-icons/fa'
import logo from './logo.svg';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext()

    return (
        <>
            {isSidebarOpen && <div className={isSidebarOpen ? 'sidebar' : 'closed-sidebar'}>
                <button className="btn close-sidebar" onClick={closeSidebar}>
                    <FaTimes />
                </button>
                <div class="logo-container">
                    <img className="logo" src={logo} alt="logo"/>
                </div>
                <div className="links">
                    {links.map(link => <div key={link.id} className="link">
                        <span className="icon">
                            {link.icon}
                        </span>
                        <a className="link-text" href={link.url}>{link.text}</a>
                    </div>)}
                </div>
                <div className="socials">
                    {social.map(socialIcon => <div key={socialIcon.id} className="social-icon-container">
                        <a className="social-icon" href={socialIcon.url}>{socialIcon.icon}</a>
                    </div>)}
                </div>
            </div>}
        </>
    )
}

export default Sidebar

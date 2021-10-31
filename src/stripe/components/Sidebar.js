import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'
import { FaTimes } from 'react-icons/fa'
import logo from '../images/logo.svg'
import sublinks from '../data'

const Sidebar = () => {
    const { closeSidebar } = useGlobalContext()

    return (
        <div className="sidebar">
            <div>
                <div className="sidebar-header">
                    <img src={logo} alt="logo" />
                    <button onClick={closeSidebar} type="button" className="close-btn">
                        <FaTimes />
                    </button>
                </div>

                <div className="sidebar-links">
                    {sublinks.map(link => {
                        return link.links.map(item => {
                            return (
                                <div className="sidebar-link" key={item.url}>
                                    <span>{item.icon}</span>
                                    <a href={item.url}>{item.label}</a>
                                </div>
                            )
                        })
                    })}

                </div>
                <button className="btn sidebar-btn" type="button">sign in</button>
            </div>

            <p className="copyrights">&copy; all rights reserved, Stripe 2021</p>
        </div>
    )
}

export default Sidebar

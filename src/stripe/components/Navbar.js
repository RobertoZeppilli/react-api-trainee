import React from 'react'
import { useGlobalContext } from '../context';
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../images/logo.svg'
import Hero from '../components/Hero'
import Sidebar from '../components/Sidebar'



const Navbar = () => {
    const { isProductsOpen,
        isDevelopersOpen,
        isCompanyOpen,
        openProducts,
        openCompany,
        openDevelopers,
        page,
        sidebarOpen,
        openSidebar
    } = useGlobalContext()

    return (
        <header className="header">
            <div className="container">
                <nav className="navbar">
                    <img className="logo" src={logo} />
                    <div className="products-link">
                        <div className="link" onClick={() => openProducts('products')}>
                            Products
                        </div>
                        {isProductsOpen && <div className="products-box">
                            {page.links.map(link => {
                                return (
                                    <div className="link-box">
                                        <span key={link.url}>{link.icon}</span>
                                        <a href={link.url}>{link.label}</a>
                                    </div>
                                )
                            })}
                        </div>}
                    </div>
                    <div className="developers-link">
                        <div className="link" onClick={() => openDevelopers('developers')}>
                            Developers
                        </div>
                        {isDevelopersOpen && <div className="developers-box">
                            {page.links.map(link => {
                                return (
                                    <div className="link-box">
                                        <span key={link.url}>{link.icon}</span>
                                        <a href={link.url}>{link.label}</a>
                                    </div>
                                )
                            })}
                        </div>}
                    </div>
                    <div className="company-link">
                        <div className="link" onClick={() => openCompany('company')}>
                            Company
                        </div>
                        {isCompanyOpen && <div className="company-box">
                            {page.links.map(link => {
                                return (
                                    <div className="link-box">
                                        <span key={link.url}>{link.icon}</span>
                                        <a href={link.url}>{link.label}</a>
                                    </div>
                                )
                            })}
                        </div>}
                    </div>
                    <button className="btn sign-in-btn" type="button">sign in</button>
                    <button onClick={openSidebar} type="button" className="toggle">
                        <GiHamburgerMenu />
                    </button>

                    {sidebarOpen && <Sidebar />}
                </nav>
                <Hero />
            </div>
        </header>
    )
}

export default Navbar

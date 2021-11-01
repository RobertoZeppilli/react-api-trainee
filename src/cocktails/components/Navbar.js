import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-center">
                <Link className="logo" to="/">
                    <h1>Cocktails <span className="and">and</span> Dreams</h1>
                </Link>
                <div className="links">
                    <ul className="list">
                        <li className="item">
                            <Link className="link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="item">
                            <Link className="link" to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

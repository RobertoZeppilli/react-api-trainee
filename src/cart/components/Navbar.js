import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Navbar = () => {
    const {amount} = useGlobalContext()
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="title">Cart</h1>

                <div className="cart-icon-container" >
                    <FaShoppingCart className="cart-icon" />
                    <span className="count">{amount}</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

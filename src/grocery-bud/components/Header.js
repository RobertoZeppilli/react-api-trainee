import React from 'react'
import Alert from './Alert'
import { MdLocalGroceryStore } from "react-icons/md";


const Header = ({ active, type, message }) => {
    return (
        <header className="header">
            <div className="title">
                <h1>Grocery List</h1>
                <MdLocalGroceryStore className="grocery"/>
            </div>
            {active && <Alert type={type} msg={message} />}
        </header>
    )
}

export default Header

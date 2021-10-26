import React from 'react'
import Alert from './Alert'

const Header = ({ active, type, message }) => {
    return (
        <header className="header">
            <h1>Grocery Bud Project</h1>
            {active && <Alert type={type} msg={message} />}
        </header>
    )
}

export default Header

import React from 'react'

const Alert = ({ type, msg }) => {
    return (
        <div className={`message-box alert-${type}`}>{msg}</div>
    )
}

export default Alert

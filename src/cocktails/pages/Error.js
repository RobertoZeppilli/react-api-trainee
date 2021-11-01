import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <section className="error">
            <div className="pages-container">
                <div className="error-text">
                    <h1>ooops! Something went wrong...</h1>
                    <Link to="/" className="btn error-btn">
                        back home
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Error

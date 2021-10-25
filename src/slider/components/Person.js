import React from 'react'
import { FaQuoteRight } from "react-icons/fa"

const Person = ({id, image, name, title, quote}) => {
    return (
        <div className="card">
            <div className="img">
                <img src={image} alt={name}/>
            </div>
            <h3 className="name">{name}</h3>
            <p className="title">{title}</p>

            <p className="quote">{quote}</p>
            <div>
                <FaQuoteRight className="quote-icon"/>
            </div>
        </div>
    )
}

export default Person

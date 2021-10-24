import React from 'react'
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Review = ({ id, name, job, image, text, next, prev }) => {
    return (
        <div className="review">
            <h1>{name}</h1>
            <p>{job}</p>
            <div className="img-container">
                <img src={image} alt={name}/>
            </div>
            <p>{text}</p>
            <div className="nav">
                <FiArrowLeft onClick={() => prev()} className="arrow" />
                <FiArrowRight onClick={() => next()} className="arrow" />
            </div>
        </div>
    )
}

export default Review

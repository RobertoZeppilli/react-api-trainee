import React, { useState } from 'react'
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const Question = ({ id, title, info }) => {
    const [isClicked, setIsClicked] = useState(false)

    return (
        <div>
            <div className="question-container">
                <div className="question">
                    <h2>{title}</h2>
                    {isClicked ? <FiChevronUp onClick={() => setIsClicked(false)} className="hide" /> : <FiChevronDown onClick={() => setIsClicked(true)} className="show" />}
                </div>
                {isClicked && <p className="info">{info}</p>}
            </div>
        </div>
    )
}

export default Question

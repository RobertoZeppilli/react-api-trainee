import React, { useState } from 'react'
import { BiChevronLeftSquare, BiChevronRightSquare } from "react-icons/bi";
import { BsDot } from "react-icons/bs"
import './App.css';
import data from './data'
import Person from './components/Person'

const App = () => {
    const [people, setPeople] = useState(data)
    let [current, setCurrent] = useState(0)

    const prev = () => {
        setCurrent(current -= 1)
        if (current < 0) {
            setCurrent(people.length - 1)
        }
    }
    const next = () => {
        setCurrent(current += 1)
        if (current > people.length - 1) {
            setCurrent(0)
        }
    }
    return (
        <div className="App">
            <h1><span className="slash">/</span> Reviews</h1>
            <div className="container">
                <div className="side">
                    <BiChevronLeftSquare className="arrow" onClick={prev} />
                </div>
                <div className="people">
                    {people.map((person, index) => current === index ? <Person key={person.id} {...person} /> : '')}
                </div>
                <div className="side">
                    <BiChevronRightSquare className="arrow" onClick={next} />
                </div>
            </div>
            <div className="dots">
                {people.map((person, index) => <BsDot onClick={() => setCurrent(index)} className={`dot ${current === index && 'active'}`} />)}
            </div>
        </div>
    )
}

export default App

import React, { useState } from 'react'
import './App.css';

import Review from './components/Review'
import data from './data'

const App = () => {
    let [index, setIndex] = useState(0)

    const nextReview = () => {
        setIndex(index += 1)
        if (index > data.length - 1) {
            setIndex(0)
        }
    }

    const prevReview = () => {
        setIndex(index -= 1)
        if (index === -1) {
            setIndex(data.length - 1)
        }
    }
    return (
        <div className="App">
            <h1 className="title">Reviews</h1>

            <div className="container">
                {data.map((rev, i) => i === index ? <Review key={rev.id} {...rev} next={nextReview} prev={prevReview} /> : '')}
            </div>
        </div>
    )
}

export default App

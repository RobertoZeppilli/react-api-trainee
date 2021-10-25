import React, { useState } from 'react'
import './App.css';
import data from './data'

import Paragraph from './components/Paragraph';
import Form from './components/Form'

const App = () => {

    const [paragraphs, setParagraphs] = useState([])
    let [count, setCount] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (count <= 0) {
            count = 1
        }
        if (count > 8) {
            count = 8
        }

        setParagraphs(data.slice(0, count))
    }

    return (
        <div className="App">
            <h1 className="title">Tired of the same lorem ipsum?</h1>
            <Form handleSubmit={handleSubmit} count={count} setCount={setCount}/>
            {paragraphs.map((para, index) => <Paragraph key={index} para={para} />)}
        </div>
    )
}

export default App

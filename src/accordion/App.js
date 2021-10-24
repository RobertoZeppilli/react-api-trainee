import React, { useState } from 'react'
import './App.css';
import Container from './components/Container'
import data from './data'

const App = () => {
    const [questions, setQuestions] = useState(data)

    return (
        <div className="App">
            <Container questions={questions}/>
        </div>
    )
}

export default App

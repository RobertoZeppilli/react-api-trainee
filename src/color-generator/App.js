import React, { useState } from 'react'
import './App.css';

import Color from './components/Color'

import Values from 'values.js'

const App = () => {
    let [color, setColor] = useState('')
    const [error, setError] = useState(false)
    const [list, setList] = useState(new Values('#f15025').all(10))
    

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            let colors = new Values(color).all(10)
            setList(colors)
        } catch (error) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 2000)
            console.log(error)
        }
    }

    return (
        <div className="App">
            <h1 className="title">Color Generator Project</h1>
            <div className="container">
                {error && <div className="error-box">Please enter a valid hex color!</div>}
                <form className="form" onSubmit={handleSubmit}>
                    <input className={`input ${error ? 'error' : ''}`} placeholder="#f15025" value={color} onChange={(e) => setColor(e.target.value)} type="text" />
                    <button className="btn" type="submit">generate</button>
                </form>
                <div className="colors">
                    {list.map((color, index) => <Color key={index} index={index} hexColor={color.hex} color={color} />)}
                </div>

                <div className="message">
                    <h2>Double click to copy the color!</h2>
                </div>
            </div>
        </div>
    )
}

export default App

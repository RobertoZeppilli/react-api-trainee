import React from 'react'

const Form = ({ handleSubmit, count, setCount }) => {
    return (
        <form className="form" onSubmit={handleSubmit}>
            <label className="label" htmlFor="amount">Paragraphs: </label>
            <input
                className="input"
                type='number'
                name='amount'
                id='amount'
                value={count}
                onChange={(e) => setCount(e.target.value)}
            />
            <button type="submit" className="btn">generate</button>
        </form>
    )
}

export default Form

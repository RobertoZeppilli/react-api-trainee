import React from 'react'

const Form = ({ task, isEditing, setTask, addTask }) => {
    return (
        <form className="form" onSubmit={addTask}>
            <input value={task} onChange={(e) => setTask(e.target.value)} className="input" type="text" />
            <button className="btn" type="submit">
                {isEditing ? 'edit' : 'submit'}
            </button>
        </form>
    )
}

export default Form

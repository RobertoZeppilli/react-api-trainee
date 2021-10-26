import React from 'react'
import { TiEdit, TiTrash } from "react-icons/ti";

const Task = ({title, id, removeTask, editTask }) => {
    return (
        <div className="task">
            <h5>{title}</h5>
            <div className="icons">
                <TiEdit onClick={() => editTask(id)} className="edit" />
                <TiTrash onClick={() => removeTask(id)} className="delete" />
            </div>
        </div>
    )
}

export default Task

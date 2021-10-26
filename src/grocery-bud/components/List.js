import React from 'react'
import Task from './Task'
import Empty from './Empty'

const List = ({ list, editTask, removeTask, clearList }) => {
    if (list.length > 0) {
        return (<div className="list">
            {list.map(item => <Task editTask={editTask} removeTask={removeTask} key={item.id} {...item} />)}
            <button className="clear" onClick={clearList}>Clear List</button>
        </div>)
    } else {
        return <Empty />
    }
}

export default List

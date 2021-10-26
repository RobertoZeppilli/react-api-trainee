import React, { useState, useEffect } from 'react'
import './App.css';

import getLocalStorage from './getLocalStorage';

import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'

const App = () => {
    const [task, setTask] = useState('')
    const [list, setList] = useState(getLocalStorage())
    const [alert, setAlert] = useState({ active: false, type: '', message: '' })
    const [editId, setEditId] = useState(null)
    const [isEditing, setIsEditing] = useState(false)

    const showAlert = (active = false, type = '', message = '') => {
        setAlert({ active, type, message })
        setTimeout(() => {
            setAlert({ active: false, type, message })
        }, 1000)
    }

    const addTask = (e) => {
        e.preventDefault()

        if (!task || task.trim().length < 1) {
            showAlert(true, 'error', 'Please enter a valid task!')
            return
        } else if (task && isEditing) {
            setList(list.map(item => item.id === editId ? { ...item, title: task } : item));
            setTask('');
            setEditId(null);
            setIsEditing(false);
            showAlert(true, 'success', 'Task Edited!');
        }
        else {
            const newItem = { id: Date.now(), title: task }
            setList([...list, newItem])
            showAlert(true, 'success', 'Task Added!')
            setTask('')
        }
    }

    const removeTask = (id) => {
        const newList = list.filter(task => task.id !== id)
        setList(newList)
        showAlert(true, 'success', 'Task Removed!')
    }

    const editTask = (id) => {
        setIsEditing(true)
        const specificItem = list.find((item) => item.id === id)
        setEditId(id)
        setTask(specificItem.title)
    }

    const clearList = () => {
        setList([])
        showAlert(true, 'success', 'List Cleared!')
    }
    // this and the handleSubmit function (in the else-if statement) keeps 
    // mantain the items added even if the page refresh
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);

    return (
        <div className="App">
            <div className="container">
                <Header {...alert}/>
                <Form task={task} addTask={addTask} setTask={setTask} isEditing={isEditing} />
                <List clearList={clearList} list={list} editTask={editTask} removeTask={removeTask} />
            </div>
        </div>
    )
}

export default App

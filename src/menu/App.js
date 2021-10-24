import React, { useState } from 'react'
import './App.css';
import data from './data'

import Categories from './components/Categories'
import Menu from './components/Menu'

const allCategories = ['all', ...new Set(data.map(item => item.category))]

const App = () => {
    let [menu, setMenu] = useState(data)
    const [categories, setCategories] = useState(allCategories)

    const filterMenu = (category) => {
        if (category === 'all') {
            setMenu(data);
            return;
        }
        const newMenu = data.filter((dish) => dish.category === category);
        setMenu(newMenu);
    };

    return (
        <div className="App">
            <h1 className="title">Our Menu</h1>
            <Categories categories={categories} filterMenu={filterMenu} />
            <Menu menu={menu} />
        </div>
    )
}

export default App

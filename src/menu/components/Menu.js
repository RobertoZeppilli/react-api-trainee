import React from 'react'
import Dish from './Dish'

const Menu = ({ menu }) => {
    return (
        <div className="menu">
            {menu.map((dish) => <Dish key={dish.id} dish={dish}/>)}
        </div>
    )
}

export default Menu

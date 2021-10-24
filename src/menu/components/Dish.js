import React from 'react'

const Dish = ({ dish }) => {
    return (
        <div className="dish">
            <h2>{dish.title}</h2>
            <div className="info">
                <p>{dish.category}</p>
                <h6>${dish.price}</h6>
            </div>
            <p className="desc">{dish.desc}</p>
            <img className="image" src={dish.img} alt={dish.title} />
        </div>
    )
}

export default Dish

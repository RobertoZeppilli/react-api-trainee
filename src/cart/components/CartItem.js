import React from 'react'

import { FaChevronUp, FaChevronDown, FaTrash } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const CartItem = (item) => {

    const { removeItem, toggleAmount } = useGlobalContext()

    return (
        <div className="item">
            <div className="item-info">
                <img className="item-img" src={item.img} alt={item.title} />
                <h5 className="item-title">{item.title}</h5>
                <div className="price-e-remove">
                    <h6 className="item-price">${item.price}</h6>
                    <FaTrash className="remove" onClick={() => removeItem(item.id)} />
                </div>
            </div>
            <div className="item-amount-container">
                <FaChevronUp className="inc icon" onClick={() => toggleAmount(item.id, 'inc')} />
                <h5 className="item-amount">{item.amount}</h5>
                <FaChevronDown className="dec icon" onClick={() => toggleAmount(item.id, 'dec')} />
            </div>
        </div>
    )
}

export default CartItem

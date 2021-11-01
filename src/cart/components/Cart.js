import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from '../context'

const Cart = () => {
    const { cart, total, clearCart } = useGlobalContext()

    // console.log(cart)
    if (cart.length === 0) {
        return (
            <section className='cart-container'>
                <header>
                    <h2>Your Cart</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        )
    }
    return (
        <div className="cart-container">
            <h2 className="cart-title">Your Cart</h2>
            <section className="cart">
                {cart.map((item) => {
                    return <CartItem key={item.id} {...item} />
                })}
            </section>
            <footer>
                <div className="clear-container">
                    <button type="button" className="clear" onClick={clearCart}>clear cart</button>
                </div>
                <div className="total-container">
                    <h4>Total</h4>
                    <h5 className="total">${total}</h5>
                </div>
            </footer>
        </div>
    )
}

export default Cart

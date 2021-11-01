import React, { useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import { reducer } from './reducer';

const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext();

const initialState = {
    loading: false,
    cart: [],
    amount: 0,
    total: 0,
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }

    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id })
    }

    const toggleAmount = (id, type) => {
        dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
    }

    const fetchCart = async () => {
        dispatch({type: 'LOADING'})
        const res = await fetch(url)
        const cart = await res.json()
        dispatch({type: 'GET_DATA', payload: cart})
    }

    useEffect(() => {
        fetchCart()
    })
    
    useEffect(() => {
        dispatch({ type: 'GET_TOTALS' })
    }, [state.cart])

    return (
        <AppContext.Provider value={{ ...state, clearCart, removeItem, toggleAmount }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext }
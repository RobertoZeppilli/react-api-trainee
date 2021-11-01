export const reducer = (state, action) => {

    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }

    if (action.type === 'REMOVE_ITEM') {
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload) }
    }

    if (action.type === 'TOGGLE_AMOUNT') {
        let temporaryCart = state.cart.map(item => {
            if (item.id === action.payload.id) {
                if (action.payload.type === 'inc') {
                    return { ...item, amount: item.amount + 1 }
                }
                if (action.payload.type === 'dec') {
                    return { ...item, amount: item.amount - 1 }

                }
            }
            return item
        }).filter(item => item.amount !== 0)
        return { ...state, cart: temporaryCart }
    }

    if (action.type === 'GET_TOTALS') {
        let { total, amount } = state.cart.reduce((total, item) => {
            const { price, amount } = item
            const itemTotal = price * amount

            total.amount += amount
            total.total += itemTotal
            return total
        }, { amount: 0, total: 0 })

        total = parseFloat(total.toFixed(2))

        return { ...state, total, amount }
    }

    if (action.type === 'LOADING') {
        return { ...state, loading: true }
    }

    if (action.type === 'GET_DATA') {
        return { ...state, cart: action.payload, loading: false }
    }

    throw new Error('None of the actions are available')
}
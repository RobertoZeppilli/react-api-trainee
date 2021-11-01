import React from 'react'
import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { useGlobalContext } from './context';

const App = () => {
    const { loading } = useGlobalContext()

    if (loading) {
        return (
            <div>loading...</div>
        )
    } else {
        return (
            <>
                <Navbar />
                <Cart />
            </>
        )
    }

}

export default App

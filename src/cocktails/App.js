import React from 'react'
import './App.css';

import Home from './pages/Home'
import About from './pages/About'
import Error from "./pages/Error";
import Cocktail from './pages/Cocktail'

import Navbar from './components/Navbar'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Navbar />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/cocktails/:id">
                    <Cocktail />
                </Route>
                <Route path="*">
                    <Error />
                </Route>
            </Switch>
        </Router>
    )
}

export default App

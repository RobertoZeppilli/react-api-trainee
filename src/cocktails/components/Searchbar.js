import React from 'react'

const Searchbar = () => {
    return (
        <div className="searchbar">
            <h2 className="search-text">Search your cocktails!</h2>
            <input type="text" className="input" placeholder="eb:margarita" />
        </div>
    )
}

export default Searchbar

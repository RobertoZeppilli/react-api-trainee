import React from 'react'

const Categories = ({ filterMenu, categories }) => {
    return (
        <div className="categories">
            {categories.map((category, index) => {
                return (
                    <button
                        type="button"
                        key={index}
                        onClick={() => filterMenu(category)}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    )
}

export default Categories

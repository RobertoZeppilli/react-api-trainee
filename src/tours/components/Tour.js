import React, { useState } from 'react'

const Tour = ({ id, name, info, image, price, remove }) => {
    const [show, setShow] = useState(false)
    return (
        <div className="tour">
            <picture>
                <img src={image} alt={name} />
            </picture>
            <section className="info">
                <div className="details">
                    <h2>{name}</h2>
                    <h5 className="price">{price}</h5>
                </div>
                <div className="description">
                    <p>{show ? info : `${info.substr(0, 200)}...`}</p>
                    <button onClick={() => setShow(!show)} className="btn">
                        {show ? 'show less' : 'read more'}
                    </button>
                </div>
                <div className="remove">
                    <button onClick={() => remove(id)} type="button">
                        Not Interested
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Tour

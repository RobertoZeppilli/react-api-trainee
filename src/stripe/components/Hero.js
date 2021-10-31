import React from 'react'
import phone from '../images/phone.svg'

const Hero = () => {
    return (

        <div className="hero">
            <div className="hero-text">
                <h1 className="hero-title">
                    Payments infrastructure for the internet.
                </h1>
                <p className="hero-description">
                    Millions of companies of all sizes --- from startups to Fortune 500's --- use Stripe's software and API's to accept payments, send payouts, and manage their business offline.
                </p>
                <button type="button" className="btn">start now</button>
            </div>
            <div className="hero-image-container">
                <img className="hero-image" src={phone} />
            </div>
        </div>


    )
}

export default Hero

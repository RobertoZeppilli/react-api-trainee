import React, { useState } from 'react'
import rgbToHex from '../utilities'

const Color = ({ index, color, hexColor }) => {
    let { alpha, rgb, weight, type } = color
    const [isCopied, setIsCopied] = useState(false)
    const bcg = rgb.join(',')
    const hex = rgbToHex(...rgb)
    const hexValue = `#${hexColor}`

    return (
        <div onDoubleClick={() => {
            setIsCopied(true)
            setTimeout(() => {
                setIsCopied(false)
            }, 1000)
            navigator.clipboard.writeText(hexValue)
        }} className={`color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `rgb(${bcg})` }}>
            <p className='percent-value'>{weight}%</p>
            <p className='color-value'>{hexValue}</p>
            {isCopied && <small className="copied">copied!</small>}
        </div>
    )
}

export default Color

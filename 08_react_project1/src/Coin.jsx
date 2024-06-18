import React from 'react'

const Coin = ({ name, symbol, imgSrc, price, key }) => {
    return (
        <div className='coins'>
            <img src={imgSrc} alt={name} />
            <h3>{name}</h3>
            <h4>{symbol}</h4>
            <p>₹ {' '}{price}</p>
        </div>
    )
}

export default Coin
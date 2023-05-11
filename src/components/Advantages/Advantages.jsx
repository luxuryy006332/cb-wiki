import React from 'react'

function Advantages( {quantity, info} ) {
    return (
        <div className="advantages__items">
            <span>{quantity}</span>
            <p>{info}</p>
        </div>
    )
}

export default Advantages
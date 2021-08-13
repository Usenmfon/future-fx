import React from 'react'

export default function CurrencyRow(props) {
    const { placeHolder,
        amount,
        onChangeAmount
    } = props
    return (
        <>
            <input 
            className="no-border change" 
            type="number"
            value={amount}
            onChange={onChangeAmount}
            placeholder={placeHolder} 
            />
        </>
    )
}

import React, { useEffect, useState } from 'react'
import CurrencyRow from './currencyRow'

const BASE_URL = 'https://api.exchangerate.host/latest'

export default function CurrencyConverter() {
    // const [currencyOptions, setCurrencyOptions] = useState([])
    const [fromCurrency, setFromCurrency] = useState()
    const [toCurrency, setToCurrency] = useState()
    const [exchangeRate, setExchangeRate] = useState(1)
    const [amount, setAmount] = useState()
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

    let toAmount, fromAmount
    if (amountInFromCurrency) {
        fromAmount = amount
        toAmount = amount * exchangeRate
    } else {
        toAmount =  amount
        fromAmount = amount / exchangeRate
    }

    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {
                // console.log(Object.keys(data.rates))
                const firstCurrency = Object.keys(data.rates)[150]
                //setCurrencyOptions([data.base, ...Object.keys(data.rates)])
                // setFromCurrency(data.base)
                setFromCurrency(Object.keys(data.rates)[105])
                setToCurrency(firstCurrency)
                setExchangeRate(data.rates[firstCurrency])
            })
    }, [])

    useEffect(() => {
        if(fromCurrency != null && toCurrency != null) {
            fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
                .then(res => res.json())
                .then(data => setExchangeRate(data.rates[toCurrency]))
        }
    }, [fromCurrency, toCurrency])
    
    function handleFromAmountChange(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(true)
    }

    function handleToAmountChange(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
    }

    return (
        <div className="row  no-gutters  align-items-center">
            <div className="col">
                <CurrencyRow 
                    placeHolder="NGN"
                    selectedCurrency={fromCurrency}
                    onChangeAmount={handleFromAmountChange}
                    amount={fromAmount}
                />
            </div>
            <div className="col-sm-auto"><img src="https://res.cloudinary.com/not-set/image/upload/v1624630624/futurelabs/Group_17_1_m41y1q.png" alt=""/></div>
            <div className="col">
                <CurrencyRow 
                    placeHolder="USD"
                    selectedCurrency={toCurrency}
                    onChangeAmount={handleToAmountChange}
                    amount={toAmount}
                />
            </div>
        </div>
    )
}

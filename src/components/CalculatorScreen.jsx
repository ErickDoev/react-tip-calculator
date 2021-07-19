import React, { useState } from 'react'
import { TipContext } from '../context/TipContext'
import { BillInput } from './BillInput'
import { PeopleInput } from './PeopleInput'
import { TipAmount } from './TipAmount'
import { TipButtons } from './TipButtons'


const initialState = {
    bill:'',
    tip:0,
    people:'',
    custom:''
}
export const CalculatorScreen = () => {

    const [tipAmount, setTipAmount] = useState(initialState);

    return (
        <TipContext.Provider value={{tipAmount,setTipAmount,initialState}}>
            <div className="container-row p20 bg-white br1 contaier-main">

                <div className="container-col calculator ">
                        <BillInput />
                        <TipButtons />
                        <PeopleInput />
                </div>

                <div className="container-col calculator-inputs bg-dark-green br1 ">
                    <TipAmount />
                </div>
            </div>
        </TipContext.Provider>
    )
}

import React, { useState } from 'react'
import { TipContext } from '../context/TipContext'
import { BillInput } from './BillInput'
import { PeopleInput } from './PeopleInput'
import { TipAmount } from './TipAmount'
import { TipButtons } from './TipButtons'


const initialState = {
    bill:'',
    tip:15,
    buttons:[5,10,15,25,50],
    people:1,
    custom:''
}
export const CalculatorScreen = () => {

    const [tipAmount, setTipAmount] = useState(initialState);

    return (
        <TipContext.Provider value={{tipAmount,setTipAmount,initialState}}>
            <div className="container-row p20 bg-white br1 contaier-main">

                <div className="flex container-col container-content-spacebetween mr25">
                        <BillInput />
                        <TipButtons />
                        <PeopleInput />
                </div>

                <div className="flex container-col bg-dark-green br1 container-content-spacebetween">
                    <TipAmount />
                </div>
            </div>
        </TipContext.Provider>
    )
}

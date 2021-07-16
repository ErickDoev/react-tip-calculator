import React,{useContext} from 'react'
import { TipContext } from '../context/TipContext'

export const TipAmount = () => {

    const {tipAmount,setTipAmount,initialState} = useContext(TipContext);

    const {bill,tip,people}  = tipAmount;

    
    return (
        <>

            <div className="container-col flex p25">
                <div className="container-row flex">
                    <div className="container-col">
                        <h2>Tip Amount</h2>
                        <p className="text3 lightgreen">/ person</p>
                    </div>

                    <div className="container-row flex container-content-end">
                        <p className="text2">
                            $ 
                            {
                                !people 
                                ? "0.00" 
                                : parseFloat((bill*tip/100)/people).toFixed(2)
                            }
                        </p>
                    </div>
                </div>

                <div className="container-row flex">
                    <div className="container-col">
                        <h2>Total</h2>
                        <p className="text3 lightgreen">/ person</p>
                    </div>

                    <div className="container-row flex container-content-end">
                        <p className="text2">
                            $ 
                            {
                                !people 
                                ? "0.00" 
                                : parseFloat((bill+(bill*tip/100))/people).toFixed(2)
                            }
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="flex container-col container-content-end p25">
                <button 
                    className={`btn btn-lightgreen btn-block ${ !bill && "btn-disable" }`}
                    disabled={ !bill && true }
                    onClick={()=>{setTipAmount(initialState)}}> RESET </button>
            </div>
                
            
        </>
    )
}

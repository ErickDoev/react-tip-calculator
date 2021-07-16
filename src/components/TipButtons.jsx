import React, { useContext} from 'react'
import { TipContext } from '../context/TipContext'

export const TipButtons = () => {
    const {setTipAmount,tipAmount} = useContext(TipContext);
    const{tip,buttons,custom} = tipAmount;

    const handleSelectTip = (tip) => {

        setTipAmount({
            ...tipAmount,
            tip
        })

    }
    const changeCustomTip = ({target}) => {

        if(!target.value){
            setTipAmount({
                ...tipAmount,
                tip:0,
                custom:''
            })
        }else{
            setTipAmount({
                ...tipAmount,
                tip:parseInt(target.value),
                custom:target.value
            })
        }
    }

    return (

        <div>
            <h3>Select Tip %</h3>
            {
                buttons.map( b => (b === tip)
                    ?<button 
                        className="btn btn-darkgreen mb43 flex-btn mr43 btn-active" 
                        disabled key={b}
                        onClick={()=>{handleSelectTip(b)}}>{b} %
                    </button>
                    :<button 
                        className="btn btn-darkgreen mb43 flex-btn mr43" 
                        onClick={()=>{handleSelectTip(b)}} 
                        key={b}>{b} %
                    </button> 
                )
            }
            <input 
                className="input flex btn" 
                type="number"
                value={custom}
                name="custom"
                placeholder="Custom"
                onChange={changeCustomTip}/>
        </div>
    )
}

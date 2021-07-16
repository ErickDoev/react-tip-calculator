import React, { useContext} from 'react'
import { TipContext } from '../context/TipContext'

export const TipButtons = () => {
    const {setTipAmount,tipAmount} = useContext(TipContext);
    const{tip,buttons,custom} = tipAmount;

    const handleSelectTip = (tip) => {

        
        setTipAmount({
            ...tipAmount,
            custom:'',
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

        <div className="container-grid">
            <h3>Select Tip %</h3>
            {
                buttons.map( b => (b === tip)
                    ?<button 
                        className="btn btn-darkgreen flex-btn btn-active" 
                        disabled key={b}
                        onClick={()=>{handleSelectTip(b)}}>{b} %
                    </button>
                    :<button 
                        className="btn btn-darkgreen flex-btn" 
                        onClick={()=>{handleSelectTip(b)}} 
                        key={b}>{b} %
                    </button> 
                )
            }

            
            <input 
                className="input input__hover flex btn" 
                type="number"
                value={custom}
                name="custom"
                placeholder="Custom"
                onChange={changeCustomTip}/>
                
        </div>
    )
}

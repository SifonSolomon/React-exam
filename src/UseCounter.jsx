import React from "react"
import { useState, useReducer } from "react"
import './UseCounter.css'

export default function CounterOne() {
   const [state, dispatch] = useReducer(reducer, { count: 0, value: 0});
   function reducer (state, action){
    switch(action.type){
        case 'set':
            {
                
                return {...state, count: action.payload};
            }
                break;
                case 'count':
                    {
                        return {...state, value: action.payload};
                    };
                    break;
                    case 'increment':
                        {
                            return{...state, value: action.payload}
                        };
                        break;
                        case 'decrement':
                        {
                            return{...state, value: action.payload}
                        };
                        break;
                        case 'reset':
                        {
                            return{...state, value: action.payload}
                        };
                    default: {
                        return state;
                    }
                    

                    
            }
    }
   
return (

    <div className="">
        <div>{state.count}</div>
        <input type="number" value={state.value} onChange={(e) => {
        dispatch({type:'count', payload:e.target.value}  );
        }}/>

        <div >
            <button className="btn btn--primary" onClick={() => {
                dispatch ({type: 'set', payload:state.value})
            }}>setvalue</button>
        </div>
<div className="">
            <button className="btn btn--primary" onClick={() => {
                dispatch({type:'increment', payload:state.value + 1})}}>Increment</button>

                 <button className="btn btn--primary" onClick={() => {
                dispatch({type:'reset', payload:state.value = 0})}}>Reset</button>

            <button className="btn btn--primary" onClick={() => {
                dispatch({type:'decrement', payload:state.value - 1})}}>Decrement</button>
        
        </div>
           
    </div>
)

}




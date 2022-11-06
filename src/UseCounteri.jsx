import { useState } from 'react';
import './UseCounteri.css'

 export default function UseCounter()  {
    const [counter, setCounter] = useState (0)
    const [value, setValue] = useState(0)
const increment = () =>{
   
    setValue((prev) => prev + 1)
}
const decrement = () => {
   
    setValue((prev) => prev - 1)
}
const reset = () => {
   setCounter(0)
    setValue(0)
}

return (
    <div className="">
        <div>{counter}</div>
        <input type="number" value={value} onChange={(e) => {
        setValue(e.target.value )}}/>
        <div>
<button className='btns' onClick={() => setCounter(value)}>Set</button>
</div>
<div>
        <button className='btns' onClick={increment}>Increment</button>
        <button className='btns' onClick={reset}>Reset</button>
        <button className='btns' onClick={decrement}>Decrement</button>
        </div>
</div>
)



}
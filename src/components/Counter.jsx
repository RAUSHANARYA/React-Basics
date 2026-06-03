import React, { useState } from 'react'
import './Counter.css';

function Counter() {
    const[count , setCount] = useState(0);
  return (
    <div className='container'>
        <p id='para'>You have clicked {count} times</p>
      <button  id='btn' onClick={()=>{setCount(count+1)}} type="button">Click</button>
   
    </div>
  )
}

export default Counter 

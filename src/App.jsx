import React, { useState } from 'react'
import './App.css'
const App = () => {
  const[hover,setHover]=useState(0)
  const[rating,setRating]=useState(0)
  return (
    <div className='app'>
    <h1>Star Rating</h1>
    {
      [1,2,3,4,5].map((num)=>(
        <button key={num}
        onClick={()=>setRating(num)}
        onMouseOver={()=>setHover(num)}
        onMouseLeave={()=>setHover(rating)}
        >
       <span className={num<=(hover|rating)?'on':'off'}>
          &#9733;
       </span>
        </button>
      ))
    }
    </div>
  )
}

export default App
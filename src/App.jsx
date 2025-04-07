import React,{ useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h2>Counter App</h2>
      <p>{count}</p>
      <div className='button-container'>
        <button onClick={()=>setCount(count+1)} className='increment'>Increment</button>
        <button onClick={()=>setCount(count-1)}className='decrement'>Decrement</button>
        <button onClick={()=>setCount(0)} className='reset'>Reset</button>
      </div>
    </div>
  );
}


export default App

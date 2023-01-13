import React from 'react'
import Click from './Components/Click.js'
import Counter from './Components/Counter.js'


export default function App() {
  return (
    <div>
    
    <Counter  render={(counter,incrementCount)=>(
    
    <Click count={counter}  incrementCount={incrementCount}/>
    )}
    
    />
    
    </div>
  )
}

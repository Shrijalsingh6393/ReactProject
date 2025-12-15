import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {decrement,increment,reset} from './CounterSlice'

const CounterUI = () => {

    const counterValue = useSelector(state=>state.counter.count)
    const dispatch = useDispatch();
  return (
    <div>
      <h2>Count : {counterValue}</h2>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default CounterUI

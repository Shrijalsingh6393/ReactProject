

import React,{useState} from 'react'
import ChildComp from './ChildComp';
import { useCallback } from 'react';


const ParentComp = () => {
    const [count,setCount] = useState(0);

    const incre = useCallback(() => {
        setCount(pre=>pre+1)
    },[])
    const decre = useCallback(() => {
        setCount(pre=>pre-1)
    },[])

    console.log("Parent rendered")
  return (
    <div>
      <h2>Count: {count}</h2>
      <ChildComp increment = {incre} decrement= {decre}/>
      {/* <button>Increment</button>
      <button>Decrement</button> */}
    </div>
  )
}

export default ParentComp

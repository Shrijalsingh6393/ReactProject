

import React,{useContext} from 'react'
import {snameContext,marksContext} from './ProviderComp'

const ComponentY = () => {
    const sname= useContext(snameContext);
    const marks = useContext(marksContext);
  return (
    <div>
      <h2>Welcome to ComponentY</h2>
      <h2>Name is : {sname} and Marks are : {marks}</h2>
    </div>
  )
}

export default ComponentY

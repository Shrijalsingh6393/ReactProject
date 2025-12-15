// Create a button with toggle ON/OFF and also update the status in the heading . Style the div section 
// with CSS Module


import React,{useState} from 'react'
// import style from './PracticeCSSModule.module.css'
import UseToggle from './UseToggle.jsx'

const ToggleState = () => {
    const [toggle,toggleChange] = UseToggle()

  return (
    <div>
      <h2>Value: {toggle}</h2>
      <button onClick={toggleChange}>Toggle {toggle=='ON'?'OFF':'ON'}</button>
    </div>
  )
}

export default ToggleState

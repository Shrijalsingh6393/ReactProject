// Create a button with toggle ON/OFF and also update the status in the heading . Style the div section 
// with CSS Module


import React,{useState} from 'react'
// import style from './PracticeCSSModule.module.css'

const Practice = () => {
    const [toggle,setToggle] = useState("ON")

    const toggleChange = () => {
        setToggle(pre=>pre=="ON"?"OFF":"ON")
    }
  return (
    <div className={style.cont}>
      <h2>Value: {toggle}</h2>
      <button className={style.sty} onClick={toggleChange}>Toggle {toggle=='ON'?'OFF':'ON'}</button>
    </div>
  )
}

export default Practice

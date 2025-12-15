// Create a button with toggle ON/OFF and also update the status in the heading . Style the div section 
// with CSS Module


import React,{useState} from 'react'
// import style from './PracticeCSSModule.module.css'

const UseToggle = () => {
    const [toggle,setToggle] = useState("ON")

    const toggleChange = () => {
        setToggle(pre=>pre=="ON"?"OFF":"ON")
    }
  return [toggle,toggleChange];
}

export default UseToggle

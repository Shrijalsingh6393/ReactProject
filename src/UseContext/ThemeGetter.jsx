

import React,{useContext} from 'react'
import {themeContext} from './ThemeProvider'



const ThemeGetter = () => {
    const {theme,setTheme} = useContext(themeContext);
    const changeTheme = () => {
        setTheme((utheme) =>{
            return utheme=='light'?'dark':'light' })
    }
  return (
    <div style={{backgroundColor:theme=='light'?'white':'black' , color : theme=='light'?'red':'black'}}>
        <h2>Mode : {theme}</h2>
      <button onClick={changeTheme}>Change Mode</button>
    </div>
  )
}

export default ThemeGetter



import React,{useState} from 'react'
import ChildTheme from './ChildTheme';
import { useCallback } from 'react';

const ParentTheme = () => {
    const [count,setCount] = useState(0);
    const [theme,setTheme] = useState('light');

    const changeCount = useCallback(() => {
        setCount(pre=>pre+1);
    },[])

    const changeTheme = () => {
        setTheme((theme) => theme=='light'?'dark':'light')
    }

    console.log("Parent rendered")
  return (
    <div>
      <h2>Count: {count}</h2>
      <ChildTheme countfunc = {changeCount}/>

      <h2>Theme : {theme}</h2>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default ParentTheme

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addtodo,deletetodo} from './TodoSlicer'

const TodoUI = () => {

    const[todoValue,settodoValue] = useState("");

    const updatedtodoValues = useSelector(state=>state.todoReducer.todoitem)
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todoValue===""){
            return;
        }
        dispatch(addtodo(todoValue));
        settodoValue("");
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' className='border-2 border-black border-solid' 
        value={todoValue} onChange={(e) => settodoValue(e.target.value)}/>
        <button type='submit'>Add Item</button>
      </form>

      <ul>
        {
            updatedtodoValues.map((item) => {
                return(
                <li key={item.id}>
                    
                    {item.text}
                    <button onClick={()=>dispatch(deletetodo(item.id))}>Delete</button>
                </li>)
            })
        }
      </ul>
    </div>
  )
}

export default TodoUI

import { createSlice ,nanoid} from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
    todoitem : JSON.parse(localStorage.getItem ("todolist")) ||     [{id:1,text:'item1'}]
}

export const TodoSlicer = createSlice({
    name : "TodoList",
    initialState,
    reducers:{
        addtodo:(state,action)=>{
            let newtodoitem = {
                id:nanoid(),
                text:action.payload
            }
            state.todoitem.push(newtodoitem);
            localStorage.setItem("todolist",JSON.stringify(state.todoitem))
        },
        deletetodo : (state,action) => {
            state.todoitem = state.todoitem.filter((u)=>u.id!=action.payload)
            localStorage.setItem("todolist",JSON.stringify(state.todoitem))
        }
    }
})


export const {addtodo,deletetodo} = TodoSlicer.actions;
export default TodoSlicer.reducer;
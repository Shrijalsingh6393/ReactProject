import { configureStore } from '@reduxjs/toolkit';
import getReducer from './ReduxPracticalTodo/TodoSlicer'


export const store1 = configureStore({
    reducer:{
        todoReducer : getReducer
    }
})

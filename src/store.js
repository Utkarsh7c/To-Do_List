import{createStore, combineReducers} from 'redux'
// reducer import
import todoReducer from './slices/todoSlice'
import { configureStore } from '@reduxjs/toolkit';
// const reducers=combineReducers({todo:todoReducer})
// const store =createStore(reducers)
// using reduxToolKit
const store =configureStore({
    reducer:{
        todo:todoReducer
    },
    devTools:process.env.NODE_ENV!='production',
})
export default store;
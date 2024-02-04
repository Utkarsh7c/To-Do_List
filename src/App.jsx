import { useContext, useReducer, useState } from 'react'
import './App.css'
import Todolist from './components/Todolist/Todolist'
import AddTodo from './components/AddTodo/AddTodo'
import todoContext from './context/todoContext'
// import todoReducer from './components/reducers/todoReducer'
import TodoDispatchcontext from './context/todoDispatchcontext'
import { useDispatch } from 'react-redux'
import{bindActionCreators} from "redux"
// import { addTodo,deleteTodo,editTodo,todoFinished } from './actions/todoactions'
import todoReducer,{addTodo,deleteTodo,editTodo,todoFinished} from './slices/todoSlice'
function App() {
  // const  [list,setList]=  useState([
  //   {id:1,todoData:'todo 1',isFinished:false},
  //   {id:2,todoData:'todo 2',isFinished:true}
  // ])
  // const[list,dispatch]=useReducer(todoReducer,[])
  
 
// instead of setList method use dispatch method 
const dispatch=useDispatch();
const actions=bindActionCreators({addTodo,deleteTodo,editTodo,todoFinished},dispatch)
  return (
  //  <todoContext.Provider value={{list}}>  
  //  <TodoDispatchcontext.Provider value={{dispatch}}>
   <div className='container' >
    <div className='Todo_App'>
            <h1>TO-DO LIST</h1> <img src="https://th.bing.com/th/id/OIP.75QV7SzR942bUAiGAiWveAHaHa?rs=1&pid=ImgDetMain" height="140px" width="100px" alt="" />
 
                       </div>

    <div className='first-wrapper  '>
     <AddTodo  addTodo={actions.addTodo}/> 
   <Todolist  deleteTodo={actions.deleteTodo} editTodo={actions.editTodo} todoFinished={actions.todoFinished}  />
   </div>
   </div>
 
  //  </TodoDispatchcontext.Provider>
  //  </todoContext.Provider>
    )
}

export default App

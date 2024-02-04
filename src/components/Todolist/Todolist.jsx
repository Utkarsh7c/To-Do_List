import todoDispatchcontext from "../../context/todoDispatchcontext";
import todoContext from "../../context/todoContext";
import Todo from "../Todo/Todo";
import { useContext } from "react";
import {useSelector} from 'react-redux'

function Todolist({editTodo,deleteTodo,todoFinished}){
    // const{list,setList}=useContext(todoContext)
    // const{dispatch}=useContext(todoDispatchcontext)
   
     const list=useSelector((state)=> state.todo.todoList)
     console.log('list is ',list)
    function onFinished(todo,isFinished){
        todoFinished({todo,isFinished})
       // dispatch({type :'finish_todo',payload:{todo,isFinished:isFinished}})
       
    }
     function  onDelete(todo){
             deleteTodo({todo})
     }
function onEdit(todo,todoText){
editTodo({todo,todoText});
   // dispatch({type :'edit_todo',payload:{todo,todoText}})
           
}
    
return (
    <div>
           {list.length>0  && list.map((todo)=><Todo key={todo.id} todoData={todo.todoData}
           id={todo.id} isFinished={todo.isFinished}
           changedFinished={(isFinished)=>onFinished(todo,isFinished)}
            
            onDelete={()=>onDelete(todo)}
           
           onEdit={(todoText)=>onEdit(todo,todoText)}
            
           
           />)}

           </div>
 )

}
export default Todolist;
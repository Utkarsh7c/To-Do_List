import  './todo.css'
import { useState } from "react";
function Todo({todoData,isFinished,changedFinished,onDelete,onEdit}){
console.log('to',todoData)
const[finished,setFinished]=useState(isFinished); 
const[editing,setEditing]=useState(false)  
const[editText,setEditText]=useState(todoData) 
return(
    <div className='wrapper'>
    <input type="checkbox" checked={finished}  onChange={(e)=> {setFinished(e.target.checked)
    changedFinished(e.target.checked)
    
    }} />
    
       {(editing)?<input type="text"  value={editText}onChange={e=>setEditText(e.target.value)}/>:<span className='span'>{todoData}</span>}
       
    
    <button className='edit' onClick={()=>{
        setEditing(!editing)
        onEdit(editText)
            }}>{(!editing)? 'Edit':'Save'}</button>
    <button className='delete' onClick={onDelete}>Delete</button>
    
    </div>
)
}
export default Todo
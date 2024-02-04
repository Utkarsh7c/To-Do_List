import { useContext, useState } from "react";
import './add.css'
// import { addTodo } from "../../actions/todoactions";
function AddTodo({updateList,isFinished,addTodo}){
    // const dispatch=useDispatch(); hook in redux 
const[inputText,setInput]=useState('');
// const{dispatch}=useContext(todoDispatchcontext);
    return(
<div>
<input type="text"    value={inputText} placeholder="add your next todo...."
onChange={(e)=>setInput(e.target.value)}
/>
 <button onClick={()=>{
    //  dispatch({type :'add_todo',payload:{todoText:inputText}})
    addTodo({todoText:inputText})
  setInput('')}}> Add</button>
</div>

    )
}
export default AddTodo;
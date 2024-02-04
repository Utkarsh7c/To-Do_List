import{createSlice, isAction} from "@reduxjs/toolkit"
const initialState={
    todoList:[]
}
const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(todo,action)=>{
            let todoText=action.payload.todoText;
            todo.todoList.push({id:todo.todoList.length+1,todoData:todoText,finished:false})
        },
editTodo:(state,action)=>{
    let todo=action.payload.todo;
 let todoText=action.payload.todoText
 state.todoList = state.todoList.map(t=>{
    if(t.id==todo.id){
        t.todoData=todoText;
    }
     return t;
})
},
todoFinished:(state,action)=>{
    let todo=action.payload.todo
    let isFinished=action.payload.isFinished
    state.todoList=state.todoList.map(t=>{
        if(t.id==todo.id){
            todo.finished=isFinished;
        }
         return t;
    })
},
deleteTodo:(state,action)=>{
    let todo=action.payload.todo
    state.todoList=state.todoList.filter(t=>t.id!=todo.id)

}
    }

})
export const {addTodo,deleteTodo,todoFinished,editTodo}=todoSlice.actions // named export 
export default todoSlice.reducer;
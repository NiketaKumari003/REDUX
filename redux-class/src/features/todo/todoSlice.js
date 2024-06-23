import { createSlice ,nanoid} from '@reduxjs/toolkit';

const initialState={
    todos:[{id:"abc",task:"demo-task",isDone:false}],
};
export const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action)=>{//state,action
const newTodo={
    id:nanoid,
    task:action.payload,
    isDone:false,
};

state.todos.push(newTodo);//direct mutation of array


        },
        deleteTodo:(state,action)=>{
            //action.payload
           state.todos = state.todos.filter((todo)=>todo.id!=action.payload)
        },
        marksDone:(state,action)=>{
            //action.payload
            state.todos=state.todos.map((todo)=>{
                if(todo.id===action.payload){
                    todo.isDone=true;
                }
            });
        },
    },
});
export const {addTodo,deleteTodo,marksDone}=todoSlice.actions;
export default todoSlice.reducer;

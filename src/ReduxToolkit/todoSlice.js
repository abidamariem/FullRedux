import { createSlice } from "@reduxjs/toolkit";


const initialState=[{
    id:1,
    description:"cooking to do",
    isDone:false
}]
const todoSlice=createSlice(
    {
        name:"todo",
        initialState,
        reducers:{
            newTask:(state,action)=>{
                 state.push(action.payload)

            },
            completed:(state,action)=>{
                const task=state.find(task=>task.id===action.payload)
            if(task){
                task.isDone=true
            }    
            },
            edit:(state,action)=>{
                const task=state.find(task=>task.id===action.payload.id)
            if(task){
                task.description=action.payload.newDescription
            }    
            }
            
        }

    }

);
export const {newTask,completed,edit}= todoSlice.actions;
export default todoSlice.reducer;

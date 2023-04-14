import { createSlice } from '@reduxjs/toolkit'


export const notesSlice= createSlice({
    name:'notes',
    initialState:{value:{
        tag:"helo",description:"as",title:"check"
    }},
    reducers:{
        update:(state)=>{
            setTimeout(()=>{})
            
        }
    }
})


export const { update} = notesSlice.actions

export default notesSlice.reducer
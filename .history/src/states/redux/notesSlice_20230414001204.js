import { createSlice } from '@reduxjs/toolkit'


const notes

export const notesSlice= createSlice({
    name:'notes',
    initialState:{value:{
        tag:"helo",description:"as",title:"check"
    }},
    reducers:{
        update:(state)=>{
            setTimeout(()=>{state.value.tag+="gellp"},1000)
            
        }
    }
})


export const { update} = notesSlice.actions

export default notesSlice.reducer
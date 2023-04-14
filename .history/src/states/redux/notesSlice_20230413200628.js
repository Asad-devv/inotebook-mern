import { createSlice } from '@reduxjs/toolkit'


export const notesSlice= createSlice({
    name:'notes',
    initialState:{value:{
        tag:"helo",description:"as",title:"check"
    }},
    reducers:{
        update:(state)=>{
            setInterval(()=>{state.value.tag+="gellp"},1000000)
            
        }
    }
})


export const { update} = notesSlice.actions

export default notesSlice.reducer
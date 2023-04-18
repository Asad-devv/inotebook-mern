import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
    name:"auth",
    initialState:{    

        credentials : {
            email:"",
            password:"",
            name:""
        }
    },
    reducers:{
        
    },
    extraReducers:{

    }



})
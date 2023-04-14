import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'


export const fetchNotes=createAsyncThunk('fetchNotes',async()=>{
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
    }

    
  }
  
  )})


const notesInitial = [
        {
          "_id": "61322f19553781a8ca8d0e06",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.509Z",
          "__v": 0
        },
        {
          "_id": "61322f19553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61322f19553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61322f19553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61322f19553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61322f19553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61322f19553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
      ]

export const notesSlice= createSlice({
    name:'notes',
    initialState:{value:notesInitial},
    reducers:{
        addNote:(state,action)=>{
          const { title, description, tag } = action.payload;
          state.value.push({
            _id: Math.floor(Math.random() * 1000000), // generate a random i
            title,
            description,
            tag,
            date: new Date().toISOString(),
            __v: 0
          });
            
        },deleteNote:(state,action)=>{
          const id = action.payload;
          const index = state.value.findIndex(note => note._id === id);
          if (index !== -1) {
            state.value.splice(index, 1);
          }
        },
        editNote:(state,action)=>{
          const {_id,title,description,tag} = action.payload
          console.log(_id,title,description,tag)

          const updatedNotes = state.value.map(note => {
            if (note._id === _id) {
              return { ...note, title, description, tag };
            }
            return note;
          });
        
          // Return the updated state
          state.value = updatedNotes;
        }
    }
})


export const { addNote,deleteNote,editNote} = notesSlice.actions

export default notesSlice.reducer
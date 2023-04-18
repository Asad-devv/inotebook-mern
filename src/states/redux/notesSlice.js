import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const host = "http://localhost:3000"

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async (arg, { getState }) => {
  
  const state = getState();
  console.log(state.notes.authToken)
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "auth-token":`${state.notes.authToken} `
    }
  });

  const data = await response.json();
//   console.log(data)
  return data;
});

export const addNote = createAsyncThunk('addNote', async (note,{ getState }) => {
  const state=getState()
  console.log(state)
  const response = await fetch(`${host}/api/notes/addnote`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": `${state.notes.authToken} ` 
    },
    body: JSON.stringify(note)
  });

  const data = await response.json();
  return data;
});

export const editNote = createAsyncThunk('editNote', async (note,{ getState }) => {
  const state=getState()

  const response = await fetch(`${host}/api/notes/updatenote/${note._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      "auth-token":`${state.notes.authToken} `
    },
    body: JSON.stringify(note)
  });

  const data = await response.json();
//   console.log(data)
  return data;
});

export const deleteNote = createAsyncThunk('deleteNote', async (noteId,{ getState }) => {

  const state=getState()
console.log(state)
  const response = await fetch(`${host}/api/notes/deletenote/${noteId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": `${state.notes.authToken} `
    }
  });

  const data = await response.json();
  return data;
});

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: null,
    status: null,
    error: null,
    authToken:"",
    alert : ""
  },
  reducers:
{ 

  setError:(state,action)=>{
    state.error = action.payload
    
  },
 setAlert:(state,action)=>{
    state.alert = action.payload
    
    },
  setAuthToken:(state, action)=>{

      // const {authToken}=action.payload
      state.authToken=action.payload
      console.log(action.payload)

  } ,addNoteOnClient: (state, action) => {
    const { title, description, tag } = action.payload;
    console.log(state)
    state.notes.push({
      _id: Math.floor(Math.random() * 1000000), // generate a random id
      title,
      description,
      tag,
      date: new Date().toISOString()
    });
  },
  deleteNoteOnClient: (state, action) => {
    const id = action.payload;
    const index = state.notes.findIndex((note) => note._id === id);
    if (index !== -1) {
      state.notes.splice(index, 1);
    }
  },
  editNoteOnClient: (state, action) => {
    const { _id, title, description, tag } = action.payload;
    console.log("state",state)


    const updatedNotes = state.notes.map((note) => {
      if (note._id === _id) {
        return { ...note, title, description, tag };
      }
      return note;
    });

    // Return the updated state
    state.notes = updatedNotes;
  }
},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.notes= action.payload;
        // console.log(state.notes)
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNote.fulfilled, (state, action) => {
        
        state.status = "success"
        // console.log(action.payload.errors[0].msg)
      })
      .addCase(editNote.fulfilled, (state, action) => {
        
        console.log(action)
        
      })
      .addCase(addNote.rejected, (state, action) => {
        state.status = 'failed';
        console.log(state)
        state.error = action.payload.msg;
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        const id = action.payload._id;
        const index = state.value.findIndex((note) => note._id === id);
        if (index !== -1){
          state.value.splice(index, 1);
        }
        console.log(action)
      });
  }
});

export const { addNoteOnClient,deleteNoteOnClient,setAlert,editNoteOnClient,setAuthToken,setError} = notesSlice.actions

export default notesSlice.reducer;

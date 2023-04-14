import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": "YOUR_AUTH_TOKEN_HERE"
    }
  });

  const data = await response.json();
  return data;
});

export const addNote = createAsyncThunk('notes/addNote', async (note) => {
  const response = await fetch(`${host}/api/notes/addnote`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": "YOUR_AUTH_TOKEN_HERE"
    },
    body: JSON.stringify(note)
  });

  const data = await response.json();
  return data;
});

export const editNote = createAsyncThunk('notes/editNote', async (note) => {
  const response = await fetch(`${host}/api/notes/editnote/${note._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": "YOUR_AUTH_TOKEN_HERE"
    },
    body: JSON.stringify(note)
  });

  const data = await response.json();
  return data;
});

export const deleteNote = createAsyncThunk('notes/deleteNote', async (noteId) => {
  const response = await fetch(`${host}/api/notes/deletenote/${noteId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "auth-token": "YOUR_AUTH_TOKEN_HERE"
    }
  });

  const data = await response.json();
  return data;
});

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [],
    status: null,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.notes = action.payload;
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNote.fulfilled, (state, action) => {
        state.notes.push(action.payload);
      })
      .addCase(editNote.fulfilled, (state, action) => {
        const noteIndex = state.notes.findIndex((note) => note._id === action.payload._id);
        if (noteIndex !== -1) {
          state.notes[noteIndex] = action.payload;
        }
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.notes = state.notes.filter((note) => note._id !== action.payload._id);
      });
  }
});

export default notesSlice.reducer;

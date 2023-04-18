import { configureStore,createAsyncThunk} from '@reduxjs/toolkit'
import notesReducer from "./notesSlice"


export const fetchTodos =createAsyncThunk()

export default configureStore({
  reducer: {notes:notesReducer},
})
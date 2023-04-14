import { configureStore,createAsyncThunk} from '@reduxjs/toolkit'
import notesReducer from "./redux/notesSlice"


export const 

export default configureStore({
  reducer: {notes:notesReducer},
})
import { configureStore,ThunkMiddleware} from '@reduxjs/toolkit'
import notesReducer from "./redux/notesSlice"


export default configureStore({
  reducer: {notes:notesReducer},
})
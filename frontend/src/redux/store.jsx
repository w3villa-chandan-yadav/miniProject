import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./slices/useSlice"
import movieReducer from "./slices/moviesSlice"
 

export const store = configureStore({
    reducer:{
        user : userReducer,
        movie:movieReducer
    }
})
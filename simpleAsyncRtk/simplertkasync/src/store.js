import {configureStore} from "@reduxjs/toolkit"
import demoReducer from "./postSlice"

 export const store=configureStore({
    reducer:{
        lesson: demoReducer,
    }
    
})
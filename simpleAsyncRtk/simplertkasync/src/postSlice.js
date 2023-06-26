import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const fetch = createAsyncThunk("fetchData", async () => {
    const response =await axios.get( "https://social-media-server.tanaypratap.repl.co/posts")
    return response.data.posts
   
})



const initialState = {
    status:"",
    posts : []

} 

export const demoSlice = createSlice({
    name :"lesson",
    initialState,
    extraReducers:(builder) => {
        builder.addCase(fetch.pending, (state) => {
            state.status = "loading"
            
        })
        builder.addCase(fetch.rejected, (state) => {
            state.status ="error"
        })
        builder.addCase(fetch.fulfilled, (state,action) => {
            state.status = "success"
            state.posts =action.payload
        })
        
    }
   

})

export default demoSlice.reducer

// export const demoActions=demoSlice.actions 
// we have not need to use that





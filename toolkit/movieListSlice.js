import { createSlice } from "@reduxjs/toolkit";


const intialState = [];

export const allMovieSlice = createSlice({
    name : "movie",
    initialState : intialState,
    reducers : {
        addMovieList : (state,action)=>{
            return action.payload
        }
    }
})


export const {addMovieList} = allMovieSlice.actions

export default allMovieSlice.reducer;


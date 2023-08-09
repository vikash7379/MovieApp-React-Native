import { createSlice } from "@reduxjs/toolkit";


export const watchlistSlice = createSlice({
    name : 'watchlist',
    initialState : {
        watchlistData : []
    },
    reducers : {
        addWatchlist : (state,action) =>{
            const data = action.payload;
            state.watchlistData.push(data);
        },
        removeWatchlist : (state,action) => {
            let id = action.payload;
            // state.watchlistData = [];
            state.watchlistData =  state.watchlistData.filter((item)=>item.id !== id);
        }
    }
})

export const {addWatchlist,removeWatchlist} = watchlistSlice.actions;
export default watchlistSlice.reducer;
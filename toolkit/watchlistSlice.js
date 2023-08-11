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
            state.watchlistData =  state.watchlistData.filter((item)=>item.id !== id);
        },
        removeAllWatchlist : (state) => {
            state.watchlistData = [];
        }

    }
})

export const {addWatchlist,removeWatchlist,removeAllWatchlist} = watchlistSlice.actions;
export default watchlistSlice.reducer;
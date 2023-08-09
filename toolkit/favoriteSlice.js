import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name : 'favorite',
    initialState : {
        data : []
    },
    reducers : {
        addFavorite : (state,action) => {
            state.data.push(action.payload);
        },
        removeFavorite : (state,action) =>{
            let id = action.payload;
            state.data = state.data.filter((el)=>el.id !== id);
        }
    }
})

export const {addFavorite,removeFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;
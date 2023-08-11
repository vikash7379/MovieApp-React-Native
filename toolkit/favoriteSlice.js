import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name : 'favorite',
    initialState : {
        favData : []
    },
    reducers : {
        addFavorite : (state,action) => {
            state.favData.push(action.payload);
        },
        removeFavorite : (state,action) =>{
            let id = action.payload;
            state.favData = state.favData.filter((el)=>el.id !== id);
        },
        removeAllFavorite : (state) => {
            console.log("remove fav")
            state.favData = []
        }
    }
})

export const {addFavorite,removeFavorite,removeAllFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { movieApi } from "./ApiQuery";
import { allMovieSlice } from "./movieListSlice";
import { watchlistSlice } from "./watchlistSlice";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {favoriteSlice} from "./favoriteSlice";
import {userSlice} from "./userSlice";


const persistConfig = {
    key : 'root',
    storage : AsyncStorage,
}

const rootReducer = combineReducers({
  watchlist:persistReducer(persistConfig,watchlistSlice.reducer),
  favorite :persistReducer(persistConfig,favoriteSlice.reducer),
  user : persistReducer(persistConfig,userSlice.reducer),
  movieApi: movieApi.reducer,
  allMovie: allMovieSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck : false,
    }).concat(movieApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store)


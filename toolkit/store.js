    import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
    import { setupListeners } from "@reduxjs/toolkit/dist/query";
    import { movieApi } from "./ApiQuery";
    import { allMovieSlice } from "./movieListSlice";

    export const store = configureStore({
        reducer : {
            movieApi : movieApi.reducer,
            allMovie : allMovieSlice.reducer,
        },

        middleware : (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(movieApi.middleware)
    })

    setupListeners(store.dispatch);
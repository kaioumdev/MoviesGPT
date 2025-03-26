import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice"

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: moviesReducer,
        gpt: gptReducer
    }
})

export default appStore;
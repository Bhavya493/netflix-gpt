import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesReducer from './movieSlice';
import gptSearchReducer from './gptSearchSlice';
import languageReducer from './languageSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gptSearch: gptSearchReducer,
        language: languageReducer
    }
})

export default store;
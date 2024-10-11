import { createSlice } from "@reduxjs/toolkit";
// import { lang } from "../utils/languageConstants";


// Avoid mutating state like this
/*
 state -> initialState : ''
 reducers -> 
 handleTranslation(state, action) {
 state = action.payload
 }
*/

// Do like below by creating an object inside initialState and mutate it
const languageReducer = createSlice({
    name: 'Language',
    initialState: {
        ln: 'en'
    },
    reducers: {
        handleTranslation(state, action) {
           state.ln = action.payload
        }
    }
})

export const {handleTranslation} = languageReducer.actions
export default languageReducer.reducer
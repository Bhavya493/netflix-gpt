import { createSlice } from "@reduxjs/toolkit";

const gptSearchReducer = createSlice({
    name: 'GPT Search',
    initialState: {
        showGptSearch: false
    },
    reducers: {
        toggleGPTSearchView(state, action) {
          state.showGptSearch = !state.showGptSearch
        }
    }
})

export const {toggleGPTSearchView} = gptSearchReducer.actions
export default gptSearchReducer.reducer
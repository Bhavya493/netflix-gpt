import { createSlice } from "@reduxjs/toolkit";

// create a user slice and add the signed in user credentials to addUser reducer and return 
// the user credentials so that it can be used across all the components
const userSlice = createSlice({
    name: 'User',
    initialState: null,
    reducers: {
        addUser(state, action) {
           return action.payload
        },
        removeUser() {
            return null;
        }
    }
});

export const {addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;
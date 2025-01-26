import {createSlice} from '@reduxjs/toolkit';

const usernameSlice = createSlice({
    name: 'userName',
    initialState: {
        userName: {
            userStatusOut: true,
            userName: null,
        },
    },
    reducers: {
        changeUserStatus(state, action) {
            if (typeof action.payload === 'boolean') {
                state.userName.userStatusOut = action.payload ;
              }
              if (typeof action.payload === 'string') {
                state.userName.userName = action.payload;
              } 
              if (action.payload === null) {
                state.userName.userName = null;
              }
        },
    }
})

export const {changeUserStatus} = usernameSlice.actions;
export default usernameSlice.reducer;
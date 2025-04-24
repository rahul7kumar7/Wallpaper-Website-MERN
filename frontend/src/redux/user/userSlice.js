import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    error:null,
    loading:false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload ;
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logoutSuccess:(state) => {
            state.loading = false;
            state.currentUser = null;
            state.error = null;
        },
        logoutFailure:(state, action) => {
            state.loading= false;
            state.error = action.payload;
        }
    }
});

export const {loginStart, loginSuccess, loginFailure, logoutSuccess, logoutFailure} = userSlice.actions;

export default userSlice.reducer;
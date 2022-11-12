import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (params) => {
    const { data } = await axios.post('/login', params);
    return data;
});

const initialState = {
    data: null,
    status: 'loading',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutw: (state) => {
            state.data = null;
        }
    },
    extraReducers: {
        [fetchUserData.pending]: (state) =>{
            state.status = 'loading';
            state.data = null;
        },
        [fetchUserData.fulfilled]: (state, action) =>{
            state.status = 'loaded';
            state.data = action.payload;
        },
        [fetchUserData.rejected]: (state) =>{
            state.status = 'error';
            state.data = null;
        },
    },
});

export const SelectisAuth = state => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;

export const { logoutw } = authSlice.actions;
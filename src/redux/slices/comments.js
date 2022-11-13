import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchComments = createAsyncThunk('posts/fetchComments', async (id) => {
    const { data } = await axios.get('/comment/id');
    return data;
});

const initialState = {
    comments: {
        items: [],
        status : 'loading',
    },
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchComments.pending]: (state) =>{
            state.posts.items = [];
            state.posts.status = 'loading';
        },
        [fetchComments.pending]: (state, action) =>{
            state.posts.items = action.payload;
            state.posts.status = 'loaded';
        },
        [fetchComments.pending]: (state) =>{
            state.posts.items = [];
            state.posts.status = 'error';
        },
    },
});

export const commentsReducer = commentsSlice.reducer;
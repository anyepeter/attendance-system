import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "aws-amplify";
import {
     listUsers,
     listCourses, listDays, listAttends, listEnrolls
     } from "../graphql/queries";

//Async thunk for fetching all users
export const fetchAllUsers = createAsyncThunk('user/fetchAllUsers', async () => {
    try {
        const response = await API.graphql({
            query: listUsers
        });
        return response.data.listUsers.items;
    } catch (error) {
        throw error;
    }
});

// // Async thunk for fetching all courses
export const fetchAllCourses = createAsyncThunk('user/fetchAllCourses', async () => {
    try {
        const response = await API.graphql({
            query: listCourses
        });
        return response.data.listCourses.items;
    } catch (error) {
        throw error;
    }
});


export const fetchAllDays = createAsyncThunk('user/fetchAllDays', async () => {
    try {
        const response = await API.graphql({
            query: listDays
        });
        return response.data.listDays.items;
    } catch (error) {
        throw error;
    }
});

// // Async thunk for fetching all attendances
export const fetchAllAttendances = createAsyncThunk('user/fetchAllAttendances', async () => {
    try {
        const response = await API.graphql({
            query: listAttends
        });
        return response.data.listAttendances.items;
    } catch (error) {
        throw error;
    }
});

export const fetchAllEnrollments = createAsyncThunk('user/fetchAllEnrollment', async () => {
    try {
        const response = await API.graphql({
            query: listEnrolls
        });
        return response.data.listEnrolls.items;
    } catch (error) {
        throw error;
    }
})


export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        allUser: [],
        allCourses: [],
        allDays: [],
        allAttend: [],
        allEnroll: [],
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            console.log(state.user);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.allUser = action.payload;
            })
            .addCase(fetchAllCourses.fulfilled, (state, action) => {
                state.allCourses = action.payload;
            })
            .addCase(fetchAllDays.fulfilled, (state, action) => {
                state.allDays = action.payload;
            })
            .addCase(fetchAllAttendances.fulfilled, (state, action) => {
                state.allAttend = action.payload;
            });
    },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;

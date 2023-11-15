import { configureStore } from '@reduxjs/toolkit';
import userReducer from './attendanceSlice'; 

const store = configureStore({
    reducer: {
        user: userReducer, 
    },
});

export default store;

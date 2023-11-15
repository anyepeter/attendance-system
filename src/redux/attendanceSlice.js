import { createSlice } from "@reduxjs/toolkit";
import { Auth } from "aws-amplify";


export const loginUser =  async () => {
    try {
        const user = await Auth.currentAuthenticatedUser({ bypassCache: false });
        return user;
    } catch (err) {
        console.log(err);
    }
}


export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {}
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
            console.log(state.user)
        }
    }
})

export const { login } = userSlice.actions;
export default userSlice.reducer;

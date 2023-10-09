import { createSlice } from "@reduxjs/toolkit";

export const loggedSlice = createSlice({
    name:'profile',
    initialState:{
        profileData:""
    },
    reducers:{
        setProfile:(state, action)=>{
            state.profileData = action.payload
        }
    }
});

export const {setProfile} = loggedSlice.actions;
export default loggedSlice.reducer;
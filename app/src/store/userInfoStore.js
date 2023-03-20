import {createSlice} from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo:null
    },
    reducers: {
        initalUserInfo: (state, action)=>{
            state.userInfo = action.payload
        }
    }
})

export const {initalUserInfo} = userSlice.actions

export default userSlice.reducer


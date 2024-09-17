import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gptSearch",
    initialState:{
        showGptStatus:false,
    },
    reducers:{
        gptSearchStatus:(state , action)=>{
            state.showGptStatus = ! state.showGptStatus
        }
    }
})


export const {gptSearchStatus} = gptSlice.actions
export default gptSlice.reducer;
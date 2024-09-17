import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gptSearch",
    initialState:{
        showGptStatus:false,
        gptSearchText:""
    },
    reducers:{
        gptSearchStatus:(state , action)=>{
            state.showGptStatus = ! state.showGptStatus
        },
        addSearchText:(state , action) => {
            state.gptSearchText = action.payload
        }
    }
})


export const {gptSearchStatus , addSearchText} = gptSlice.actions
export default gptSlice.reducer;
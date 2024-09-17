import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name:"language",
    initialState:{
        currentLanguage : "ENGLISH"
    },
    reducers:{
        setLanguage:(state , action)=>{
            state.currentLanguage = action.payload;
        }
    }
});


export default languageSlice.reducer;
export const {setLanguage} = languageSlice.actions;
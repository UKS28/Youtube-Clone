import { createSlice } from "@reduxjs/toolkit";
const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen
        },

        offMenu:(state)=>{
            state.isMenuOpen=false;
        }
    },
    
})

export const { toggleMenu, offMenu }=appSlice.actions;
export default appSlice.reducer;
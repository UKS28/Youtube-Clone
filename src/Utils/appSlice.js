import { createSlice } from "@reduxjs/toolkit";
const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        error:"",
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen
        },

        offMenu:(state)=>{
            state.isMenuOpen=false;
        }
        ,
        setError:(state,action)=>{
            state.error=action.payload;
        }
    },
    
})

export const { toggleMenu, offMenu,setError }=appSlice.actions;
export default appSlice.reducer;
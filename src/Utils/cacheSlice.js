import { createSlice } from "@reduxjs/toolkit";

const cacheSlice=createSlice({
    name:"cacheSlice",
    initialState:{},
    reducers:{
        setCache:(state,action)=>{
            
            state = Object.assign(state, action.payload);
        }
    }
})

export const {setCache}=cacheSlice.actions;
export default cacheSlice.reducer;
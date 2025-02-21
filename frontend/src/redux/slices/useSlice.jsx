import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
   
}


const userSlice =createSlice({
    name:"User",
    initialState,
    reducers:{
        addUser:(state,actions)=>{
            state.user = actions.payload;
           
        },

        logOut:(state,actions)=>{
            state.user =null
            
        }

    }
})

export const { addUser ,logOut} = userSlice.actions ;

export default userSlice.reducer ;
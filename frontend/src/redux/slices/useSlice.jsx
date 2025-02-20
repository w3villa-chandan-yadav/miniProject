import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    user:null,
    isLogin:false
}


const userSlice =createSlice({
    name:"User",
    initialState,
    reducers:{
        addUser:(state,actions)=>{
            state.user = actions.payload;
            state.isLogin =true
        },

        logOut:(state,actions)=>{
            state.user =null,
            state.isLogin =false
        }

    }
})

export const { addUser ,logOut} = userSlice.actions ;

export default userSlice.reducer ;
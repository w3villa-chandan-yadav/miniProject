import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    watchLater :[],
    favourt :[],
}

const movieSlice = createSlice({
    name:"moviesSlice",
    initialState,
    reducers:{
        addWachLater:(state,action)=>{
           if(state.watchLater.some((ele)=> ele.id === action.payload.id)){
            state.watchLater = state.watchLater.filter((ele)=>ele.id != action.payload.id)
           }else{
            state.watchLater.push(action.payload)
           }
        },
        addFavourt:(state,action)=>{
 

            if(state.favourt.some((ele)=> ele.id === action.payload.id)){
             state.favourt = state.favourt.filter((ele)=>ele.id != action.payload.id)
            }else{
             state.favourt.push(action.payload)
            }
         }
    }
})


export const { addFavourt ,addWachLater} = movieSlice.actions;

export default movieSlice.reducer
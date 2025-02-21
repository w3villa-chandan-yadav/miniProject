import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    watchLater :localStorage.getItem("movie") ? JSON.parse(localStorage.getItem("movie")) : [],
    favourt :localStorage.getItem("favourt") ? JSON.parse(localStorage.getItem("favourt")) : [],
}

const movieSlice = createSlice({
    name:"moviesSlice",
    initialState,
    reducers:{
        addWachLater:(state,action)=>{
           if(state.watchLater.some((ele)=> ele.id === action.payload.id)){
            state.watchLater = state.watchLater.filter((ele)=>ele.id != action.payload.id)
            localStorage.setItem("movie",JSON.stringify(state.watchLater))
           }else{
            state.watchLater.push(action.payload)
            localStorage.setItem("movie",JSON.stringify(state.watchLater))
           }
        },
        addFavourt:(state,action)=>{
 

            if(state.favourt.some((ele)=> ele.id === action.payload.id)){
             state.favourt = state.favourt.filter((ele)=>ele.id != action.payload.id)
             localStorage.setItem("favourt",JSON.stringify(state.favourt))

            }else{
             state.favourt.push(action.payload)
             localStorage.setItem("favourt",JSON.stringify(state.favourt))

            }
         }
    }
})


export const { addFavourt ,addWachLater} = movieSlice.actions;

export default movieSlice.reducer
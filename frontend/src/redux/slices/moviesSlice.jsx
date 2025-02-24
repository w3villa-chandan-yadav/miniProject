import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    watchLater :localStorage.getItem("movie") ? JSON.parse(localStorage.getItem("movie")) : [],
    favourt :localStorage.getItem("favourt") ? JSON.parse(localStorage.getItem("favourt")) : [],
    populars : localStorage.getItem("popular") ? JSON.parse(localStorage.getItem("popular")) :[] ,
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
         },

         addPopular:(state,action)=>{
            console.log(action.payload)
            console.log("aa gya hu")
            if(state.populars.some((ele)=>ele.id === action.payload.id)){

                state.populars = state.populars.map((card)=>( card.id === action.payload.id  ? {...card,votes:card.votes+1} : card))
            }else{
                  state.populars.push(action.payload)
            }
         },
         removePopular:(state,action)=>{
            if(state.populars.some((ele)=>ele.id === action.payload.id)){

            state.populars = state.populars.map((card) => {
                if (card.id === action.payload.id) {
                  if (card.votes > 0) {
                    return { ...card, votes: card.votes - 1 }; 
                  } else {
                    return card; 
                  }
                }
              });

         }}

    }
})


export const { addFavourt ,addWachLater,addPopular,removePopular} = movieSlice.actions;

export default movieSlice.reducer
"use client"

import { useState, useCallback, useEffect } from "react"
import { useSelector } from "react-redux"
import { SingleCard } from "../components"


function PopularsNow() {
  const {populars} = useSelector((state)=>state.movie)

  const [cards ,setCards] = useState([])

//   const handleVote = useCallback((id) => {
//     setCards((prevCards) => {
//       return updatedCards.sort((a, b) => b.votes - a.votes)
//     })
//   }, [])

  useEffect(()=>{
         const newPopular  =    [...populars].sort((a, b) => b.votes - a.votes)

     
    setCards(newPopular)

  },[populars])

  return (
    <div className="w-full h-full overflow-x-auto p-4">
      <div className="flex justify-center">
      <h1 className="'text-center  text-xl poppins font-bold dark:text-white text-black'">Live Trending</h1>

      </div>
      <div className='w-full flex flex-wrap gap-4 justify-center'>
          {cards.map((card,ind) => 
          (
           <div
           className="    className='lg:w-[200px]  md:w-[190px]  w-[150px] relative shrink-0 shadow-md dark:shadow-sm dark:shadow-white shadow-black lg:h-[340px] md:h-[300px]  h-[240px] group rounded-md  dark:text-black text-white '>"
           >
            <h2 className="dark:text-white text-black anton text-2xl absolute z-20 -top-3 -left-1">{ind+1}</h2>
             <SingleCard  ele={card} />
            </div>
               
        ))}
      </div>
    </div>
  )
}

export default PopularsNow




// "use client"

// import { useState, useEffect } from "react"
// import { useSelector } from "react-redux"
// import { SingleCard } from "../components"

// function PopularsNow() {
//   const { populars } = useSelector((state) => state.movie)
//   const [cards, setCards] = useState([])

//   useEffect(() => {
//     // Create a copy of the populars array and sort it
//     const sortedPopulars = [...populars].sort((a, b) => b.votes - a.votes)
    
//     // Update the state with the sorted cards
//     setCards(sortedPopulars)

//     // Optional: To check what's inside the sortedPopulars
//     console.log(sortedPopulars)
//   }, [populars])

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6">Voting Cards</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {cards.map((card) => (
//           <SingleCard ele={card} key={card.id} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default PopularsNow


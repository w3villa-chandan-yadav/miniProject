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
    <div className="container mx-auto w-full h-full overflow-x-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Voting Cards</h1>
      <div className='w-fit mx-auto md:gap-5 gap-9 h-full grid lg:grid-cols-5 md:top-0 relative top-[90px]   sm:grid-cols-3 grid-cols-1 mb-5'>
          {cards.map((card,ind) => 
          (
           
                <SingleCard  ele={card} />
               
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


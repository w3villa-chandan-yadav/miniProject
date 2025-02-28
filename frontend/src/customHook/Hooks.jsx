
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../components/firebase'
import { addDoc, collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
import { addFirstWatchLater } from '../redux/slices/moviesSlice';


const Hooks = () => {
    const dispatch = useDispatch() ;

    const {user} = useSelector((state)=>state.user)

    

//     const addFavaroutFirebase =async (movie)=>{
//  try {
//     const result = await addDoc(collection(db,"favouret"),movie)
//    console.log("result",result)
//  } catch (error) {
//     console.log("eror",error)
//  }
//     }  



    const addFavaroutFirebase = async (movie,uid) => {
        try {
            // Check if the movie already exists in the "watchLater" collection
            const q = query(collection(db, "favouret"), where("id", "==", movie.id),where("uuid","==",uid));  // Assuming "id" is a unique identifier
            const querySnapshot = await getDocs(q);
    
            if (!querySnapshot.empty) {
                // If the movie already exists, remove it
                querySnapshot.forEach(async (docSnapshot) => {
                    // Get the document reference and delete it
                    await deleteDoc(doc(db, "favouret", docSnapshot.id));
                    // console.log("Movie removed from Watch Later:", docSnapshot.id);
                });
            } else {
                // If the movie does not exist, add it
                const result = await addDoc(collection(db, "favouret"), movie);
                // console.log("Movie added to Watch Later with ID:", result.id);
            }
        } catch (error) {
            console.error("Error handling movie in Watch Later:", error);
        }
    };



    const addWatchLaterFirebase = async (movie,uid) => {
        try {
            // Check if the movie already exists in the "watchLater" collection
            const q = query(collection(db, "watchLater"), where("id", "==", movie.id),where("uuid","==",uid));  // Assuming "id" is a unique identifier
            const querySnapshot = await getDocs(q);
    
            if (!querySnapshot.empty) {
                // If the movie already exists, remove it
                querySnapshot.forEach(async (docSnapshot) => {
                    // Get the document reference and delete it
                    await deleteDoc(doc(db, "watchLater", docSnapshot.id));
                    // console.log("Movie removed from Watch Later:", docSnapshot.id);
                });
            } else {
                // If the movie does not exist, add it
                const result = await addDoc(collection(db, "watchLater"), movie);
                // console.log("Movie added to Watch Later with ID:", result.id);
            }
        } catch (error) {
            console.error("Error handling movie in Watch Later:", error);
        }
    };



    const testFirestoreConnection = async () => {
        try {
            // console.log("step 1")
          const querySnapshot = await getDocs(collection(db, "test"));
        //   console.log("step 2")
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
          });
        } catch (error) {
        //   console.error("Error fetching documents: ", error);
        }
      };

      const getWatchLater = async()=>{
        console.log("calling in watch")
        const data = []

        try {
            const queryee = await query(collection(db,'watchLater'),where("uuid","==",user.uid))
            const querySnapShort  = await getDocs(queryee);
            querySnapShort.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                 data.push({...doc.data()})
              });
            //   localStorage.setItem("movie",JSON.stringify(data))
            dispatch(addFirstWatchLater(data))



        } catch (error) {
            
        }

      }


      const getfavouretLater = async()=>{
        // console.log("calling in watch")
        const data = []

        try {
            const queryee = await query(collection(db,'favouret'),where("uuid","==",user.uid))
            const querySnapShort  = await getDocs(queryee);
            querySnapShort.forEach((doc) => {
                // console.log(doc.id, " => ", doc.data());
                 data.push({...doc.data()})
              });
            //   localStorage.setItem("movie",JSON.stringify(data))
            dispatch(addFirstWatchLater(data))



        } catch (error) {
            
        }

      }

  return {addFavaroutFirebase,testFirestoreConnection,addWatchLaterFirebase,getWatchLater,getfavouretLater}
}

export default Hooks
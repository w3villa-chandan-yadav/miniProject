import React from 'react'
import {useGoogleLogin,GoogleOAuthProvider} from "@react-oauth/google";
import { FaGooglePlusG } from "react-icons/fa";



const GoogleLogin = () => {

    // const {}

    const responseGoogle =async (authResult)=>{

        try {
            if(authResult["code"]){
                console.log("data fetching")

                const data = await fetch(`http://localhost:5000/google?code=${authResult["code"]}`) ;
                console.log(data)

                const result =await data.json();

                console.log(result)
            }
          console.log(authResult["code"])
        } catch (error) {
          console.log(`error  while requiesting code ${error}`)
        }
    
      }
    
    
      const googleLogin= useGoogleLogin({
        onSuccess:responseGoogle,
        onError:responseGoogle,
    
        flow:'auth-code'
      })

  return (
    <button 
    className='dark:bg-gray-700 flex justify-center gap-4 dark:hover:bg-black   text-black bg-white  dark:text-white  items-center w-full py-2 text-center mt-3 rounded-md poppins font-semibold  cursor-pointer'
        onClick={googleLogin}>
     <FaGooglePlusG className='dark:text-white text-3xl'/>   Google Login 
    </button>
  )
}


const LoginGoogle =()=>{
    return(
      <GoogleOAuthProvider clientId="181245531875-quhabvaodrjq1kcchmde90ltd1rqj91s.apps.googleusercontent.com">
      <GoogleLogin/>
    </GoogleOAuthProvider>
    )

  }

  export default LoginGoogle
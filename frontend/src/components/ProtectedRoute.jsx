import React, { useEffect } from 'react'
import {useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate()

    const {user} = useSelector((state)=>state.user)

    // console.log("inside")


    useEffect(()=>{

        if(!user){
            navigate("/")
        }
    },[user])
  return (
    <>{children}</>
  )
}

export default ProtectedRoute
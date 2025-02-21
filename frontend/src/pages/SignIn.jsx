import React, { useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../components/firebase';
import {toast} from "react-toastify"
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../redux/slices/useSlice';
import { Link, useNavigate } from 'react-router-dom';


const SignIn = () => {

    const {user} = useSelector((state)=>state.user)

    const navigate = useNavigate()

    const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    try {

        const user = await signInWithEmailAndPassword(auth,email,password)
       toast.success("userlogin")
        console.log(user.user)


        dispatch(addUser(user.user))

        localStorage.setItem("user",JSON.stringify(user.user)) ;
        navigate("/")



      console.log("User login successfully");
      // Redirect to login page or home page
    } catch (error) {
      setError(error.message);
      toast.error(error.message)
      console.error("Error in Firebase:", error.message);
    }
  };

  useEffect(()=>{
    console.log(user)
      if(user){
        navigate("/")
      }

  },[])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            

        <h4
          className='text-xs text-right mr-auto  cursor-pointer'><Link  to="/login">
            Don't have <span className='text-red-600'>account</span>
         </Link>
          </h4>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

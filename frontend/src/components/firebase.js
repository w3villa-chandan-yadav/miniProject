// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcqZyzDBuHmozJJebnDAyKsXMj6VuzZJM",
  authDomain: "login-auth-91801.firebaseapp.com",
  projectId: "login-auth-91801",
  storageBucket: "login-auth-91801.firebasestorage.app",
  messagingSenderId: "99161289715",
  appId: "1:99161289715:web:da37eb177d1e855aa35886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export default app 
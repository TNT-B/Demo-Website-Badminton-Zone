// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB67OB2TB04qgU-VVCqEE4-3DutahMt4cQ",
  authDomain: "react-login-se.firebaseapp.com",
  projectId: "react-login-se",
  storageBucket: "react-login-se.appspot.com",
  messagingSenderId: "896183242638",
  appId: "1:896183242638:web:e8dfebe3db9620a9c79edf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const database = getDatabase();

const provider = new GoogleAuthProvider();

export { app, auth, database, provider }
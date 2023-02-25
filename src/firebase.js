// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfdJVmyqUzHBz3yCJ6pRISV6uYChDnbPQ",
  authDomain: "blog-81129.firebaseapp.com",
  projectId: "blog-81129",
  storageBucket: "blog-81129.appspot.com",
  messagingSenderId: "350212057960",
  appId: "1:350212057960:web:be3b51b430bf7bbfbe04dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize database
export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

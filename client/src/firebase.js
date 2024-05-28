// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FBASE_API_KEY,
  authDomain: "mern-estate-5d462.firebaseapp.com",
  projectId: "mern-estate-5d462",
  storageBucket: "mern-estate-5d462.appspot.com",
  messagingSenderId: "364019646790",
  appId: "1:364019646790:web:3919297fc5eea59fb12547"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
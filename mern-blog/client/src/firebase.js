// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-55949.firebaseapp.com",
  projectId: "mern-blog-55949",
  storageBucket: "mern-blog-55949.appspot.com",
  messagingSenderId: "828218816488",
  appId: "1:828218816488:web:ec3eefb44e3dc52391965d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


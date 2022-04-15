// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClSkC0-KFkG-qgjsEKl9B5BFnuTg6ZBuI",
  authDomain: "book-cf1ca.firebaseapp.com",
  projectId: "book-cf1ca",
  storageBucket: "book-cf1ca.appspot.com",
  messagingSenderId: "457965605926",
  appId: "1:457965605926:web:570a3c583375f2701fc2e7",
  measurementId: "G-9JJB86T0WW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider()

const analytics = getAnalytics(app);
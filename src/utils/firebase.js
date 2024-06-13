// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnSMO9kiZVqTSL37085zTvk31BMMdjaWQ",
  authDomain: "netflix-gpt-bf06d.firebaseapp.com",
  projectId: "netflix-gpt-bf06d",
  storageBucket: "netflix-gpt-bf06d.appspot.com",
  messagingSenderId: "1012452547361",
  appId: "1:1012452547361:web:b6daf67eb84146248dfc60",
  measurementId: "G-SX0ZM9WZ1F",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();



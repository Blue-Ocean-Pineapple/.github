// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6NOO0Yes6vJhP3VpgDQ_VDGn_2nI2lsg",
  authDomain: "chores-cc1e0.firebaseapp.com",
  projectId: "chores-cc1e0",
  storageBucket: "chores-cc1e0.appspot.com",
  messagingSenderId: "1022591467256",
  appId: "1:1022591467256:web:72c0b9b23f80f14f05850d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

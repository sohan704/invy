// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiryMs4nQcjv8BWeMPKfBeOEfxveNLcjY",
  authDomain: "invy-ffcdc.firebaseapp.com",
  projectId: "invy-ffcdc",
  storageBucket: "invy-ffcdc.appspot.com",
  messagingSenderId: "803790273471",
  appId: "1:803790273471:web:a0be0712e0ed39b3dd3f0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
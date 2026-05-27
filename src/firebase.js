import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6gn1HC3ixYNGrKuJY67pYhqC8c5sVk4M",
  authDomain: "pintere-d389f.firebaseapp.com",
  projectId: "pintere-d389f",
  storageBucket: "pintere-d389f.firebasestorage.app",
  messagingSenderId: "1087764101147",
  appId: "1:1087764101147:web:102b11310cba352f1920be",
  measurementId: "G-860DTCZCCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export { signInWithPopup };
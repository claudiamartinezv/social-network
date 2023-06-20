// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyB6W6liEes_Zam-pglvOGL6X9vf9yBjM",
  authDomain: "social-network-cmv.firebaseapp.com",
  projectId: "social-network-cmv",
  storageBucket: "social-network-cmv.appspot.com",
  messagingSenderId: "667897401272",
  appId: "1:667897401272:web:20a0c3dc21c9870746894d",
  measurementId: "G-88N6LZYGM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

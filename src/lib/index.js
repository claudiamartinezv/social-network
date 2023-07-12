// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
} from 'firebase/firestore';

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


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//firestore
const eventsCollection = (publicaciones) => addDoc(collection(db, 'posts'), { publicaciones });

//mostar publicaciones
const getPost = () => getDocs(collection(db, 'posts'));

//borrar datos o publicaciones
const fetchPost = query(collection(db, 'posts'));

const deleteDocument = (id) => deleteDoc(doc(db, 'posts', id));

export const auth = getAuth(app);
export {
  db,
  collection,
  getDocs,
  eventsCollection,
  getPost,
  deleteDocument,
  fetchPost,
  onSnapshot,
};




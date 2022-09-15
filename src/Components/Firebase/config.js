// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8LzZ5REC_pf-0LATzYBvA1VJN5qUgrLE",
  authDomain: "angelortizecommerce.firebaseapp.com",
  projectId: "angelortizecommerce",
  storageBucket: "angelortizecommerce.appspot.com",
  messagingSenderId: "556108872972",
  appId: "1:556108872972:web:a0337b238c7d80c6a9dd29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqGFvI1CmdK4Bv9m2_7YnwmdtZetkVpiM",
  authDomain: "hspantryapp-50d04.firebaseapp.com",
  projectId: "hspantryapp-50d04",
  storageBucket: "hspantryapp-50d04.appspot.com",
  messagingSenderId: "973003186435",
  appId: "1:973003186435:web:ffc7344eb57802f4408936"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const auth = getAuth(app);


export { firestore, auth };
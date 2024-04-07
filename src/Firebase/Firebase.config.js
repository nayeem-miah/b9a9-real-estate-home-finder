// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwErmtZviF2ldfAXIoG4XW-3JQYjVLDAM",
  authDomain: "cd-b9a9-b9-real-estate-09.firebaseapp.com",
  projectId: "cd-b9a9-b9-real-estate-09",
  storageBucket: "cd-b9a9-b9-real-estate-09.appspot.com",
  messagingSenderId: "725283509718",
  appId: "1:725283509718:web:963c7c118415cb1bf84077"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user , setUser] = useState(null);
  console.log(user);
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    
  };
  // sign in user 
  const logIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
  }
  

  // auth Info
  const authInfo = {
    createUser, 
    logIn,
   
  };
  // onAuthStateChanged
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
      if(currentUser){
        setUser(currentUser);
      }
    })

  })
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

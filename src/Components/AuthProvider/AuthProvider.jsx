/* eslint-disable react/prop-types */
import { createContext } from "react";

const AuthContext = createContext(null);
const AuthProvider = ({children}) => {







    // auth Info 
    const authInfo ={
        
    }
  return <AuthContext.Provider value={authInfo}>
    {children}

  </AuthContext.Provider>;
};

export default AuthProvider;

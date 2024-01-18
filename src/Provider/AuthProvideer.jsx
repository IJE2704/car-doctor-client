import React, { Children, createContext, useState } from 'react';
import {getAuth} from "firebase/auth";
import app from '../Firebase/firbase.confif';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvideer = ({children}) => {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvideer;
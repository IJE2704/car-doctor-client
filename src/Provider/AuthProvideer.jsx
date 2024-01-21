import React, { Children, createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../Firebase/firbase.confif';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvideer = ({children}) => {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);
  const [servicePrice,setServicePrice] = useState(0);

  // create a funtion to create a user with email and password
  const createUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }

  // create a function to sign in a user with email and password
  const signInUser = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }

  //create this function with firebase for logout user
  const logout =()=>{
    return signOut(auth);
  }

  //set current user in userlist 
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser);
      console.log(currentUser);
      setUser(false);
    })
    return ()=>{
      return unsubscribe();
    }
  },[])

  //create a object to combine all functions and states
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signInUser,
    logout,
    servicePrice,
    setServicePrice
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvideer;
import React, { Children, createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../Firebase/firbase.confif';
import axios from 'axios';
axios.defaults.withCredentials = true;

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvideer = ({children}) => {
  const [user,setUser] = useState(0);
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
    const cUser = user?.email;
    axios.post("http://localhost:5000/logout",cUser,{withCredentials:true})
    .then(res =>{
      console.log("get response from logout user info: " , res.data)
    })
    setLoading(true)
    return signOut(auth);
  }

  //set current user in userlist 
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser);
      setUser(false);
      const userEmail = currentUser?.email || user?.email;
      const cUser = {email : userEmail}
      if(currentUser){
        
        axios.post("http://localhost:5000/user",cUser,{withCredentials:true})
        .then(res =>{
          console.log("get response from user info: " , res.data)
        })
        console.log(cUser)
        console.log(currentUser)
      }
      else{
        // axios.post("http://localhost:5000/logout",cUser,{withCredentials:true})
        // .then(res =>{
        //   console.log("get response from logout user info: " , res.data)
        // })
      }
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
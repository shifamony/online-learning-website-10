import React, { createContext } from 'react';
import { useState, useEffect} from 'react';

import {getAuth, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app);

const UserContexts = ({children,id}) => {
  const [user, setUser] = useState(null);
  //LOADING FUNCTION
  const [loading, setLoading] = useState(true);

//==================================================

const [courses,setCourses] = useState();
useEffect(() => {
  fetch(`https://online-learning-server.vercel.app/courses`)
  .then(res => res.json())
  .then(data => setCourses(data))
},[])


//======================================================



  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider)
  };

  //create user
const createUser = (email,password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email,password);
   }

//SIGNIN
const signIn = (email,password) => {
   setLoading(true);
   return signInWithEmailAndPassword(auth, email,password)
 }
 
//updata profile

const updateUserProfile = (profile) => {
  return updateProfile(auth.currentUser, profile)
}


    //logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
       }

  //ovserver
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log('User state change', currentUser)
        setUser(currentUser);
        setLoading(false);
      });
      return () => {
        unsubscribe();
      }
   },[])

const authInfo = {user, 
  loading, 
  courses,
  setCourses,
  providerLogin, 
  createUser,
  signIn, 
  updateUserProfile, 
  logOut
};




    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContexts;
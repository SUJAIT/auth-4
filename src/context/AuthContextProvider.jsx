import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../auth/auth';

export const AuthContext = createContext(null); //createContext

const auth = getAuth(app)

export const AuthContextProvider = ({children}) => {
  const [user,setUser] = useState(null); // user-set
  const [loading,setLoading] = useState(true); // loading set ,


  const createUser = (email,password) =>{
      return createUserWithEmailAndPassword(auth, email, password)
   }

const loginUser = (email,password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}

const logOut = () =>{
    return signOut(auth)
}

//{observer} user auth state,,User Asa Kina ta chack korba...
useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth,currentUser =>{
    setUser(currentUser);
    setLoading(false)
  });
  return () =>{
    return unsubscribe();//function ta barbar observe korta taka sata stop korar jonno ata k akta variable ar modda nia return kora dia hoi,,,
  }
},[])

    const authInfo ={
        user,
        loading,
        createUser,
        loginUser,
        logOut
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
              {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthContextProvider;
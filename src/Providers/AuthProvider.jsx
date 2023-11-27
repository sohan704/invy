import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";



export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

  
  const provider = new GoogleAuthProvider();
  const axiosPublic = UseAxiosPublic();
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  const [isOwnerLoading, setIsOwnerLoading] = useState(true);

  const [user, setUser] = useState(null);
  

  const [loading, setLoading] = useState(true);

  const [checkoutProduct, setCheckoutProduct] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    });
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }
  


  useEffect(() => {
    const observe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('Current User', currentUser);
      const userInfo = {email : currentUser?.email};
      setLoading(false);
      console.log(loading);
      if (currentUser) {
        //something
        console.log('Current User', currentUser);
        const userInfo = {email: currentUser?.email};
        axiosPublic.post('/jwt',userInfo).then(res => {
          if(res.data.token){
            localStorage.setItem('access-token',res.data.token);
          }
        })
        
      } else {
         //something
         console.log('Current User', currentUser);
         localStorage.removeItem('access-token');
         console.log('Logged Out');
      } 
    })
    return () => {
      observe();
    }
  }, [])




  const authInfo = {
    createUser,
    signIn,
    logOut,
    user,
    loading,
    googleLogin,
    updateUserProfile,
    checkoutProduct, 
    setCheckoutProduct,
    
  }

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
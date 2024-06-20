/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebaseConfig";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

    const verifyEmail = () => {
      setLoading(true);
      sendEmailVerification(auth.currentUser).then(() => {
        toast.success("Please check your email to verify.", {
          position: "top-center"
        });
      });
    };

  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

    const updateUserProfile = (name, email, uid) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        email: email,
        uid: uid,
      });
    };

  const googleLogin = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      setUser(userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error("Error signing in with Google:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = { googleLogin,verifyEmail, updateUserProfile, user, createUser, signIn, logOut, loading };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

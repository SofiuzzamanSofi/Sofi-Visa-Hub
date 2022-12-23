import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config.init';


const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    // console.log(user);



    const createNewUser = (email, password) => {
        console.log(email, password);
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const updateNamePhoto = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    };
    const sendEmailVerify = () => {
        return;
    };
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };
    const forgotPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }
    // social 3 in one------------
    const googleFacebookGithub = (provider) => {

        return signInWithPopup(auth, provider)
    };
    const logout = () => {
        return signOut(auth)
    };


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (runningUser) => {
            if (runningUser) {
                setUser(runningUser);
            } else {

            };
            setLoading(false);
        });
        return () => unSubscribe();
    }, []);




    const contextInfo = { user, setUser, loading, setLoading, createNewUser, updateNamePhoto, sendEmailVerify, login, forgotPassword, googleFacebookGithub, logout, error, setError }


    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext, };
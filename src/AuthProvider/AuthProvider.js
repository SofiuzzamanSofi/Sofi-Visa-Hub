import React, { createContext, useEffect, useState } from 'react';
import { getAuth } from "firebase/auth"
import app from '../firebase/firebase.config.init';

const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUserr] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        return () => { }
    }, [])

    const contextInfo = { user, setUserr, loading, setLoading }

    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
import React, { createContext, useEffect, useState } from 'react';


const AuthContext = createContext();

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
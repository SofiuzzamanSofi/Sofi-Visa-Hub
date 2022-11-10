import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import LoadingPage from '../../Components/LoadingPage/LoadingPage';


const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    console.log(user);


    const location = useLocation();
    if (loading) {
        return <LoadingPage />;
    };
    if (!user?.auth) {
        <p>user</p>
        return <Navigate to="/signin" state={{ from: location }} replace />
    };


    return children;
};

export default PrivetRoute;

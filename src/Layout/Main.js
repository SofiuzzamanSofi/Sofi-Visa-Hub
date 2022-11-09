import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Headers from '../Components/Headers/Headers';

const Main = () => {
    return (
        <div>
            <Headers />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;
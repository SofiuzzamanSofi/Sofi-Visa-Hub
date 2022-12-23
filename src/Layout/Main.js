import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Headers from '../Components/Headers/Headers';


const Main = () => {


    return (
        <div>
            <Headers />
            <div className="max-w-screen-2xl mx-auto border">
                {/* <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-slate-200"> */}
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;
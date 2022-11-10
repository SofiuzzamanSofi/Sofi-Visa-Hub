import React from 'react';
import GeneralInfo from '../GeneralInfo/GeneralInfo';
import MySelfAndSite from '../MySelfAndSite/MySelfAndSite';
import MyselfDetails from '../MyselfDetails/MyselfDetails';
import Services from '../ServiceRelated/Services/Services';
import AppsPlayStore from '../UpdatesAndApp/AppsPlayStore';
import Update from '../UpdatesAndApp/Update';


const Home = () => {


    return (
        <div>
            <Services />
            <GeneralInfo />
            <MyselfDetails />
            <MySelfAndSite />
            <Update />
            <AppsPlayStore />
        </div>
    );
};

export default Home;
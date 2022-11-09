import React from 'react';
import GeneralInfo from '../GeneralInfo/GeneralInfo';
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
            <Update />
            <AppsPlayStore />
        </div>
    );
};

export default Home;
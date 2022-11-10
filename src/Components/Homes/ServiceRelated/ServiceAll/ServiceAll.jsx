import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Service from '../Service/Service';


const ServiceAll = () => {


    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => {
                setServices(data.data);
            })
            .catch(error => console.log(error));
    }, []);


    if (services.length === 0) {
        // console.log(services.length);
        return <LoadingPage />
    }



    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="pb-10 border-t-4 border-b-4  border-b divide-y">
                {services?.map(service => <Service key={service.no} service={service} />)}
            </div>
        </div>
    );
};

export default ServiceAll;
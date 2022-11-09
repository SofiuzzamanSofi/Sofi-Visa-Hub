import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';


const Services = () => {


    const [services, setServices] = useState();
    // console.log(services);


    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setServices(data.data);
            })
            .catch(error => console.log(error))
    }, [])





    return (
        <div className=''>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="mb-10 border-t-4 border-b-4  border-b divide-y">
                    {services?.map(service => <Service key={service.no} service={service} />)}


                </div>
                <div className="text-center">
                    <button>01</button>
                </div>
                <div className="text-center">
                    <Link to="" className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                        See all articles
                        <svg
                            className="inline-block w-3 ml-2"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                        >
                            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingPage from '../../../LoadingPage/LoadingPage';
import Service from '../Service/Service';


const Services = () => {


    const [services, setServices] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [pageNo, setPageNo] = useState(0);
    let perPageContentSize = 3;
    // console.log(pageNo)
    // console.log(services);


    useEffect(() => {
        fetch(`http://localhost:5000/services?pageNo=${pageNo}&perPageContentSize=${perPageContentSize}`)
            .then(res => res.json())
            .then(data => {
                setPageCount(data.count);
                setServices(data.data);
            })
            .catch(error => console.log(error));
    }, [pageNo, perPageContentSize]);



    const pages = Math.ceil(pageCount / perPageContentSize);

    if (services.length === 0) {
        // console.log(services.length);
        return <LoadingPage />
    }



    return (
        <div className=''>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="pb-10 border-t-4 border-b-4  border-b divide-y">
                    {services?.map(service => <Service key={service.no} service={service} />)}


                </div>
                <div className='border py-10'>
                    <div className="text-center">
                        <p className='py-2'>currently selected page: <span className='text-rose-600'>{pageNo + 1}</span></p>
                        {
                            [...Array(pages)?.keys()]?.map(num => <button key={num} className={`border px-4 py-2 hover:text-yellow-300 hover:border-red-600 ${pageNo === num ? "text-yellow-300 border-red-600" : ""}`} onClick={() => setPageNo(num)}>{num + 1}</button>)
                        }

                    </div>
                    <div className="text-center pt-4 ">

                        <Link to="/services" className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 hover:text-cyan-300">
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
        </div>
    );
};

export default Services;
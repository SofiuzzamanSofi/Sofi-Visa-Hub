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
        fetch(`https://sofi-visa-hub-server-sofiuzzamansofi.vercel.app/services?pageNo=${pageNo}&perPageContentSize=${perPageContentSize}`)
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
            <div className="px-4">
                <div className="">
                    {services?.map((service, i) => <Service key={i} service={service} />)}
                </div>
                <div className='border-y py-10'>
                    <div className="text-center">
                        <p className='py-2'>currently selected page: <span className='text-rose-600'>{pageNo + 1}</span></p>
                        {
                            [...Array(pages)?.keys()]?.map((num, i) => <button key={i} className={`border px-4 py-2 hover:text-yellow-300 hover:border-red-600 ${pageNo === num ? "text-yellow-300 border-red-600" : ""}`} onClick={() => setPageNo(num)}>{num + 1}</button>)
                        }
                    </div>
                    <div className="text-center pt-4 ">

                        <Link to="/services" className="inline-flex items-center font-semibold transition-colors duration-200  hover:text-yellow-800 hover:font-extrabold">
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
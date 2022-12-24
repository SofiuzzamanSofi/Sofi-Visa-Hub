import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Service = ({ service }) => {
    // console.log(service);
    // console.log(service?.details[0]?.details1)
    // console.log(service?.ours[0]?.serviceCharge)
    return (
        <div className="grid py-8 sm:grid-cols-4 border-t">
            <div className="mb-4 sm:mb-0">
                <div className=" space-y-1 text-xs font-semibold tracking-wide uppercase bg-[url()] cursor-pointer">
                    <PhotoProvider>
                        <PhotoView src={service?.icon} >
                            <img className='w-44 h-32 ' src={service?.icon} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                    <Link className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        aria-label="Category"
                    >

                    </Link>
                </div>
            </div>
            <div className="sm:col-span-3 lg:col-span-2">
                <div className="mb-3">
                    <Link className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                        <p className="font-extrabold leading-none text-xl md:text-2xl">
                            {service?.name}

                        </p>
                    </Link>
                </div>
                <p className="text-gray-700 font-serif text-justify">
                    {service?.details[0]?.details1}
                </p>
                <p className="text-red-700 font-serif py-4 ">
                    Service Charge: <span className='text-cyan-900'>$ {service?.ours[0]?.serviceCharge}</span>
                </p>
                <Link
                    to={`/service/${service._id}`}
                    className="font-serif bg-[#fae807] hover:bg-[#ffec00] py-3 px-6 w-40 rounded-md flex justify-between"
                >
                    <p>view details</p>
                    <ArrowRightIcon className='w-5' />
                </Link>
            </div>
        </div>
    );
};

export default Service;
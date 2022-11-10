import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Service = ({ service }) => {
    // console.log(service);
    // console.log(service?.details[0]?.details1)
    // console.log(service?.ours[0]?.serviceCharge)
    return (
        <div className="grid py-8 sm:grid-cols-4 border">
            <div className="mb-4 sm:mb-0">
                <div className="space-y-1 text-xs font-semibold tracking-wide uppercase bg-[url()]">
                    <img className='w-44 h-32 ' src={service?.icon} alt="" />
                    <Link className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        aria-label="Category"
                    >

                    </Link>
                </div>
            </div>
            <div className="sm:col-span-3 lg:col-span-2">
                <div className="mb-3">
                    <Link className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
                        <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
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
                <button className="px-6 py-4 font-serif bg-sky-500 rounded-lg hover:bg-green-600 hover:text-white text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    <Link to="" className='flex justify-between'>
                        <p>view details</p>
                        <ArrowRightIcon className='w-5' />
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Service;
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';



const ServicesDetails = () => {


    const data = useLoaderData();
    const service = data?.data;
    console.log(service);
    console.log(service?.details[0]?.details1);

    const [serviceDetails, setServiceDetails] = useState({});



    // useEffect(() => {
    //     fetch(`http://localhost:5000/service/}`)
    //         .then(res => res.json())
    //         .then(data => {

    //         })
    //         .catch(error => console.log(error));
    // }, []);


    return (
        <div>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                {service?.name}
                                <br className="hidden md:block" />

                                <span className="relative px-1">
                                    <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                                    <span className="relative inline-block text-deep-purple-accent-400 text-gray-700">
                                        <span className='text-pink-600'> Eligible For: </span> {service?.byWhom}
                                    </span>
                                </span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                quae. explicabo.
                            </p>
                        </div>
                        <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                                <div className="h-full p-5 border border-l-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5">
                                        {service?.mercate[0]?.name}
                                    </h6>
                                    <p className="text-sm text-gray-900 font-serif">
                                        {service?.mercate[0]?.details}
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
                                <div className="h-full p-5 border border-l-0 rounded-r">
                                    <h6 className="mb-2 font-semibold leading-5">
                                        {service?.mercate[1]?.name}
                                    </h6>
                                    <p className="text-sm text-gray-900 font-serif">
                                        {service?.mercate[1]?.details}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cursor-pointer'>
                        <PhotoProvider>
                            <PhotoView src={service?.image} >
                                <img className='hover: object-cover w-full h-56 rounded shadow-lg sm:h-96' src={service?.image} alt="" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                </div>
                <div>
                    <div className='py-4 font-serif'>
                        <p className='text-2xl'>Speciality:</p>
                        <p className='py-2'>{service?.details[0]?.details1}</p>
                        <p>{service?.details[1]?.details2}</p>
                    </div>
                </div>

                <div>
                    <div className="grid py-8 sm:grid-cols-4 border">
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
                        <div className="sm:col-span-3 lg:col-span-2 border-l-4 pl-4">
                            <div className="bg-white  shadow-sm border-deep-purple-accent-400">

                                <h6 className="mb-2 font-semibold leading-5">
                                    {service?.mercate[0]?.openions}
                                </h6>
                                <p className="text-sm text-gray-900 font-serif">
                                    {service?.mercate[0]?.details}
                                </p>

                            </div>
                            <p className="text-black font-serif py-4 ">
                                Money Back Guaranty : <span className='text-rose-600'>$ {service?.ours[0]?.moneyback}</span>
                            </p>
                            <p className="text-black font-serif pb-4">
                                Service Charge: <span className='text-rose-600'>$ {service?.ours[0]?.serviceCharge}</span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                comment
            </div>
        </div>
    );
};

export default ServicesDetails;
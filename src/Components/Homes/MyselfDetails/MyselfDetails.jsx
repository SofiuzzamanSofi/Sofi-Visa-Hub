import React from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const MyselfDetails = () => {
    return (
        <div className="px-4 py-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className='lg:col-span-1 bg-slate-500 rounded-lg p-4'>
                <h1 className='text-4xl font-bold pb-2'>Meet <span className='text-rose-600'>Sofi-Visa-Hub</span>
                    <br /> From <br /> Dhaka, Bangladesh</h1>
                <a target="_blank" href="https://www.facebook.com/sofiuzzaman.sofii" className='border-2 flex border-rose-500 rounded-sm py-3 px-5 text-rose-600 flex justify-between w-52' >
                    <p>Find More About Me  </p>
                    <ArrowRightCircleIcon className='w-5' />
                </a>
            </div>
            <div className='lg:col-span-2 font-serif'>
                <h1 className='text-2xl text-rose-500'>Why Engage With Me?</h1>
                <p className='text-justify text-rose-900'>I am a dual citizenship Bangladesh & Japan. I have a lot of experience in this field with real experience.</p>
                <p className='text-justify text-rose-700'>I am certified, bonded, insured, experienced and reliable Traveling Notary Company Serving San Francisco Area since 2000. We now provide mobile notary services in 25 states and the list of services that we offer has grown to also include Mobile Fingerprinting, Apostille Processing, Loan Closings, Translation Services and Process Serving.</p>
            </div>
        </div>
    );
};

export default MyselfDetails;
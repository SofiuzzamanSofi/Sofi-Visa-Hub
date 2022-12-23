import React from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const MyselfDetails = () => {
    return (
        <div className="px-4 py-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3 bg-slate-50">
            <div className='lg:col-span-1 bg-[#fae807] hover:bg-[#ffec00]  rounded-lg p-4'>
                <h1 className='text-xl md:text-2xl font-bold pb-2'>Meet <span className=''>Sofi-Visa-Hub</span>
                    <br /> From <br /> Dhaka, Bangladesh</h1>
                <a target="_blank" rel="noreferrer" href="https://sofiuzzamansofi.netlify.app" className='border border-black rounded py-3 px-5 flex justify-between w-52' >
                    <p>Find More About Me  </p>
                    <ArrowRightCircleIcon className='w-5' />
                </a>
            </div>
            <div className='lg:col-span-2 font-serif'>
                <div className='grid gap-4'>
                    <h1 className='text-xl md:text-2xl'>Why Engage With Me?</h1>
                    <p className='text-justify'>I am a dual citizenship Bangladesh & Japan. I have a lot of experience in this field with real experience.</p>
                    <p className='text-justify'>I am certified, bonded, insured, experienced and reliable Traveling Notary Company Serving San Francisco Area since 2000. We now provide mobile notary services in 25 states and the list of services that we offer has grown to also include Mobile Fingerprinting, Apostille Processing, Loan Closings, Translation Services and Process Serving.</p>
                </div>
            </div>
        </div>
    );
};

export default MyselfDetails;
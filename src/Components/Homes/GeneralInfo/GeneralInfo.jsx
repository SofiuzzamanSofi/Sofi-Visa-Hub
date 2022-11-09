import React from 'react';
import image from "../../../assets/imigration.JPG"
import image2 from "../../../assets/main.png"


const GeneralInfo = () => {
    return (
        <div className='py-10'>
            <div className="px-4 py-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 bg-slate-300" >
                <div className='lg:col-span-1 bg-slate-400 rounded-md'>
                    <img className='text-center m-auto  bg-slate-400 p-4 rounded-md' src={image2} alt="" />
                </div>
                <div className='lg:col-span-2 font-serif bg-slate-400 p-4 rounded-md'>
                    <h1 className='text-2xl text-rose-900 font-bold pb-4'>About this site and the services.</h1>
                    <h1>This is my verified website. A am a very trusted person to work related visa work. I Provided any <span className="text-sm text-red-600 font-semibold">VISA</span> & <span className="text-sm text-red-600 font-semibold">PASSPORT</span> related work. This website helps you to chose many option for go abroad and applying citizenship application. I also do your papers strong so you can get any countries visa easily. Feel free to chose any of my working. This is fixed.<span className="text-sm text-red-600 font-semibold">No Bargains to money</span> . Pay <span className="text-sm text-red-600 font-semibold">Guarantee </span > and feel tension free. Thanks you . pls visit all of my <span className="text-sm text-red-600 font-semibold">plan</span> </h1>
                </div>
            </div>
            <img className='text-center m-auto rounded-md' src={image} alt="" />
        </div>
    );
};

export default GeneralInfo;
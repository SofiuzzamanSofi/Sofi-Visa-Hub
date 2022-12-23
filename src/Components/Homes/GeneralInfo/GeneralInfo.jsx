import React from 'react';
import image from "../../../assets/imigration.JPG"
import image2 from "../../../assets/main.png"


const GeneralInfo = () => {
    return (
        <div className='py-10'>
            <div className="px-4 py-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 bg-zinc-50" >
                <div className='lg:col-span-1'>
                    <img className='text-center m-auto  bg-zinc-100 p-4 rounded-md' src={image2} alt="" />
                </div>
                <div className='lg:col-span-2 font-serif bg-zinc-100 rounded-md p-4'>
                    <div className='grid gap-4'>
                        <h1 className='text-xl md:text-2xl font-bold'>About this site and the services.</h1>
                        <h1>This is my verified website. A am a very trusted person to work related visa work. I Provided any <span className=" font-bold">VISA</span> & <span className="font-bold">PASSPORT</span> related work. This website helps you to chose many option for go abroad and applying citizenship application. I also do your papers strong so you can get any countries visa easily. Feel free to chose any of my working. This is fixed. <span className="font-bold"> No Bargains to money</span> . Pay <span className="font-bold">Guarantee </span > and feel tension free. Thanks you . pls visit all of my <span className="font-">plan</span> </h1>
                    </div>
                </div>
            </div>
            <img className='border w-full' src={image} alt="" />
        </div>
    );
};

export default GeneralInfo;
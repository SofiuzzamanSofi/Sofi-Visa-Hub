import React from 'react';

const Update = () => {
    return (
        <div className="rounded-md w-full dark:bg-gray-500 bg-[url(https://i0.wp.com/www.gloryofthesnow.com/wp-content/uploads/2021/05/beautiful-ocean-wallpaper-backgrounds-sea-beach-images-HD-8.jpg?resize=1440%2C648&ssl=1)]" >
            <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">Get Our Updates</h1>
                <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">Find out about events and other news</p>
                <div className="flex flex-row">
                    <input type="text" placeholder="example@email.com" className="w-48 p-3 rounded-l-lg sm:w-2/33 border-none border-l-2 " />
                    <input type="text" className="w-24 p-3 rounded-r-lg sm:w-2/33 bg-[#ffec00] border-none cursor-pointer" defaultValue="Subscribe" />
                </div>
            </div>
        </div>
    );
};

export default Update;
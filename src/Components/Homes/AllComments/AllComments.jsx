import React from 'react';

const AllComments = ({ comment }) => {
    return (
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium">Profile</p>
                <p className="text-xs">Adipisci fuga autem eum!</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full">
                    <label htmlFor="bio" className="text-sm">Feadback</label>
                    <textarea id="bio" defaultValue={comment?.commentText} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
                </div>
                <div className="col-span-full sm:col-span-3">
                    <label htmlFor="username" className="text-sm">Full Name:</label>
                    <input id="username" type="text" defaultValue={comment?.userInfl[0]?.name} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                </div>
                <div className="col-span-full sm:col-span-3">
                    <label htmlFor="website" className="text-sm">Email:</label>
                    <input id="website" type="text" defaultValue={comment?.userInfl[0]?.email} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                </div>



                <div className="col-span-full">
                    <label htmlFor="bio" className="text-sm">Photo</label>
                    <div className="flex items-center space-x-2">
                        <img src={comment?.userInfl[0]?.photoURL} alt="" className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700" />
                        <button type="button" className="px-4 py-2 border rounded-md dark:border-gray-100">Change</button>
                    </div>
                </div>
            </div>
        </fieldset>
    );
};

export default AllComments;
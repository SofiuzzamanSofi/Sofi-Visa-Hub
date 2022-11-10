import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';



const AllComments = ({ comment, children, setStateChange, stateChange }) => {


    const [commentText, setCommentText] = useState(comment?.commentText);

    const location = useLocation();
    // console.log(location.pathname)
    // if (location.pathname == "/myreviews") {
    //     console.log("phname");
    // }


    // edit comment function--------------
    const handlecommentchange = () => {
        const c = { currentComment: commentText }
        const process = window.confirm(`Hey ${comment?.userInfl[0]?.name}  are you want to update this products`);
        if (!process) {
            return;
        }
        if (commentText?.length > 25) {
            fetch(`http://localhost:5000/commentsbyuser/${comment?._id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ currentComment: commentText })
            })
                .then(res => res.json())
                .then(data => {
                    setStateChange(!stateChange)
                    toast.success('Successfully Updated.')
                })
                .catch(error => console.log(error));
        } else {
            // console.log(commentText)
            return toast.error('Comment Should be at Least 25 characters.')
        };
    };



    // comment delete function---------------
    const handlecommentDelete = () => {
        const process = window.confirm(`Hey ${comment?.userInfl[0]?.name}  are you want to delete this products`);
        if (!process) {
            return;
        }
        fetch(`http://localhost:5000/commentsbyuser/${comment?._id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                setStateChange(!stateChange)
                toast.success('Successfully deleted.')
            })
            .catch(error => console.log(error));
    };







    return (
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium">{comment?.serviceName}</p>
                <p className="text-xs">Adipisci fuga autem eum!</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 font-serif">
                <div className="col-span-full">
                    <label htmlFor="bio" className="text-sm">Feadback</label>
                    <textarea onChange={(event) => setCommentText(event.target.value)} value={commentText} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
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
                        {<button type="button" className="px-4 py-2 border rounded-md dark:border-gray-100"> By: {comment?.userInfl[0]?.name}</button>}
                        {children ? children : ""}

                        {
                            location.pathname == "/myreviews" ?
                                <>
                                    <button onClick={handlecommentchange} type="button" className="px-4 py-2 border rounded-md dark:border-gray-100 hover:bg-cyan-500"> Edit Review</button>
                                    <button onClick={handlecommentDelete} type="button" className="px-4 py-2 border rounded-md dark:border-gray-100 hover:bg-rose-500">Delet Review</button>
                                </>
                                :
                                ""
                        }
                    </div>
                </div>
            </div>
            <Toaster />
        </fieldset>
    );
};

export default AllComments;
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import EditModal from '../../ToasterModal/EditModal';
import LoadingPage from '../../LoadingPage/LoadingPage';



const AllComments = ({ comment, children, setStateChange, stateChange }) => {


    const { user } = useContext(AuthContext);
    const [commentText, setCommentText] = useState(comment?.commentText);
    const [modalOpen, setModalOpen] = useState(false);
    const [loadingSpinner, setLoadingSpinner] = useState(false);
    const location = useLocation();




    // close Modal function ---
    const handleClosedModal = () => {
        setModalOpen(false);
    };


    // edit comment function--------------
    const handleCommentEdit = () => {
        // const ccccc = { currentComment: commentText }
        if (!(commentText?.length > 25)) {
            // console.log(commentText)
            toast.error('Comment Should be at Least 25 characters.');
            console.log("return before")
            return;
        } else {
            setLoadingSpinner(true);

            fetch(`https://sofi-visa-hub-server-sofiuzzamansofi.vercel.app/commentsbyuser/${comment?._id}`, {
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
                .catch(error => console.log(error))
                .finally(() => {
                    setModalOpen(false);
                    setLoadingSpinner(false);
                });
        };
        console.log("ddddddd", commentText);
    };



    // comment delete function---------------
    const handleCommentDelete = () => {
        setLoadingSpinner(true);
        fetch(`https://sofi-visa-hub-server-sofiuzzamansofi.vercel.app/commentsbyuser/${comment?._id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                setStateChange(!stateChange)
                toast.success('Successfully deleted.')
            })
            .catch(error => console.log(error))
            .finally(() => {
                setModalOpen(false);
                setLoadingSpinner(false);
            });
    };





    if (!commentText || loadingSpinner) {
        return <LoadingPage />
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
                    <p
                        // onChange={(event) => setCommentText(event.target.value)}
                        className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900">
                        {commentText}
                    </p>
                </div>
                <div className="col-span-full sm:col-span-3">
                    <label htmlFor="username" className="text-sm">Full Name:</label>
                    <input disabled id="username" type="text" defaultValue={comment?.userInfl[0]?.name} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                </div>
                <div className="col-span-full sm:col-span-3">
                    <label htmlFor="website" className="text-sm">Email:</label>
                    <input disabled id="website" type="text" defaultValue={comment?.userInfl[0]?.email} className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                </div>



                <div className="col-span-full">
                    <label htmlFor="bio" className="text-sm">Photo</label>
                    <div className="flex items-center space-x-2">
                        <img src={comment?.userInfl[0]?.photoURL} alt="" className="w-10 h-10 rounded-full" />
                        {<button
                            className="px-4 py-2 border rounded-md dark:border-gray-100 read disabled" disabled
                        >
                            By: {comment?.userInfl[0]?.name}
                        </button>}
                        {children ? children : ""}

                        {
                            location.pathname === "/myreviews" || comment?.userInfl[0]?.email === user?.email ?
                                <>
                                    <button
                                        // onClick={() => handleOpenModal(handleCommentEdit)}
                                        onClick={(e) => setModalOpen(e.target?.id)}
                                        type="button" id="Edit"
                                        className="px-4 py-2 border rounded-md dark:border-gray-100 hover:bg-yellow-300"
                                    >
                                        Edit Review
                                    </button>
                                    <button
                                        onClick={(e) => setModalOpen(e.target?.id)}
                                        type="button" id="Delete"
                                        className="px-4 py-2 border rounded-md dark:border-gray-100 hover:bg-rose-500 "
                                    >
                                        Delete Review
                                    </button>
                                </>
                                :
                                ""
                        }
                    </div>
                </div>
                {modalOpen && <EditModal
                    commentText={commentText}
                    setCommentText={setCommentText}
                    modalOpen={modalOpen}
                    handleClosedModal={handleClosedModal}
                    handleCommentEdit={handleCommentEdit}
                    handleCommentDelete={handleCommentDelete}
                />}
            </div>
        </fieldset>
    );
};

export default AllComments;
import React from 'react';
import { XCircleIcon } from '@heroicons/react/24/solid'

const EditModal = ({ commentText, setCommentText, modalOpen, handleClosedModal, handleCommentEdit, handleCommentDelete }) => {


    // console.log("modalOpen", modalOpen)




    return (
        <section className='border border-red-600 fixed top-0 right-0 bottom-0 left-0 z-10  flex justify-center items-center'>
            <div className='bg-slate-200 p-5 rounded-md relative'>
                <button className='absolute top-2 right-2'                                >
                    <XCircleIcon className='w-8'
                        onClick={handleClosedModal}
                    />
                </button>
                <div className='pt-5'>
                    <p>
                        Are you sure You wan't to {modalOpen} this post?
                    </p>
                    {modalOpen === "Edit" ?
                        <textarea
                            onBlur={(event) =>
                                setCommentText(event.target.value)} className="w-full h-40 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                            defaultValue={commentText}
                        >

                        </textarea>
                        :
                        ""
                    }
                    <div className='flex justify-between gap-5'>
                        <button
                            className="py-4 my-8 font-semibold rounded-md bg-[#fae807] hover:bg-[#ffec00] w-36 text-center m-auto"
                            onClick={
                                modalOpen === "Edit" ?
                                    handleCommentEdit
                                    :
                                    handleCommentDelete
                            }
                        >
                            Yes
                        </button>
                        <button
                            className="py-4 my-8 font-semibold rounded-md bg-[#fae807] hover:bg-[#ffec00] w-36 text-center m-auto"
                            onClick={handleClosedModal}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EditModal;
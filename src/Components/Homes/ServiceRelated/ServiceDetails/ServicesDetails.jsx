import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import AllComments from '../../AllComments/AllComments';




const ServicesDetails = () => {

    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    const service = data?.data;
    const serviceId = service._id;
    const serviceName = service?.name;
    // console.log(allComments)
    // console.log(service);
    // console.log(service?.details[0]?.details1);


    const [allComments, setAllcomments] = useState([]);
    const [stateChange, setStateChange] = useState(true);
    const [commentText, setCommentText] = useState({});
    const [loginShow, setLoginShow] = useState(false)
    // console.log(commentText?.length);
    const location = useLocation();




    // read / show comment -----------
    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}/comment`)
            .then(res => res.json())
            .then(data => {
                setAllcomments(data.data);
            })
            .catch(error => console.log(error))
    }, [stateChange]);





    // comment add handler ----------------------------
    const handleComment = (event) => {
        if (!user) {
            // toast.info(`To comment or feedback login first pls.`)
            toast(`To comment or feedback login first pls.`, {
                icon: '👏',
            });
            setLoginShow(true);
            return;
        }
        if (commentText?.length > 25) {
            console.log(commentText)
            const name = user?.displayName;
            const email = user?.email;
            const photoURL = user?.photoURL;
            // console.log(name, email, photoURL, serviceId,serviceName)
            const comment = {
                serviceId,
                serviceName,
                commentText,
                userInfl: [
                    {
                        name,
                        email,
                        photoURL,
                    },
                ],
            };
            // console.log(comment);

            // comment add function--------------------
            fetch(`http://localhost:5000/service/${serviceId}/comment`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(comment),
            })
                .then(res => res.json())
                .then(data => {
                    setStateChange(!stateChange)
                    console.log('under fetch')
                    console.log(data);
                    toast.success(`Dear ${name} your finback will be listed bellow now. Thank you.`)
                })
                .catch(error => console.log(error))
        } else {
            // console.log(commentText)
            return toast.error('Comment Should be at Least 25 characters.')
        };
    };





    return (
        <div>


            {/* -------------Details Section ------------- */}
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


            {/* -------------------Review Section----------------------------- */}
            <div>
                <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100 text-center m-auto">
                    <div className="flex flex-col items-center w-full">
                        <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                        <div className="flex flex-col items-center py-6 space-y-3">
                            <span className="text-center">How was your experience?</span>
                            <div className="flex space-x-3 text-yellow-300">
                                <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                                <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-gray-600">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col w-full relative font-serif">
                            <textarea onChange={(event) => setCommentText(event.target.value)} name='textArea' rows="3" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"></textarea>
                            <button onClick={handleComment} type="button" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400 border bg-cyan-400 w-36 text-center m-auto" >Leave feedback</button>
                            {
                                loginShow ?
                                    <button><Link to="/signin" state={{ from: location }} replace className="font-semibold rounded-md border w-32 py-2 text-center m-auto absolute top-36 left-[25%] bg-red-600 ">Sign In</Link></button>
                                    :
                                    ""
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* comment section ------------------------------------- */}

            <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
                <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    {
                        allComments?.map(comment => <AllComments key={comment._id} comment={comment} />)
                    }
                </form>
            </section>

        </div>
    );
};

export default ServicesDetails;
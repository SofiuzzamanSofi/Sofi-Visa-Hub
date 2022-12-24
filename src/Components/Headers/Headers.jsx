import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import image from "../../assets/sofi-visa-logo.png"
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import loginIcon from "../../assets/sign in.JPG"
import toast, { Toaster } from 'react-hot-toast';



const Headers = () => {

    const { user, setUser, logout } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location?.pathname);

    // small display slider and profile slider -----------
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    // scroll to off profile or mobile menu bar ---
    (isMenuOpen || isProfileOpen) && window.addEventListener("scroll", () => {
        setIsMenuOpen(false);
        setIsProfileOpen(false);
    });

    const handleMenuMobile = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsProfileOpen(false);
    };
    const handleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
        setIsMenuOpen(false);
    };


    // header / navbar items ------------
    const menuItemsLi = [
        "Home", "Services", "About Us", "Blogs", user && "My Reviews", user && "Add service"
    ];



    const hndleLogOut = () => {
        logout()
            .then(() => {
                // Sign-out successful.
                setUser(null);
                toast.success('Log Out Successful.')
            }).catch((error) => {
                // An error happened.
                toast.error('Log Out UnSuccess, Something Happened Unnecessary.')
            });
    };



    return (
        <div className=" bg-zinc-100" >
            <div className="relative flex items-center justify-between max-w-screen-2xl mx-auto text-xl md:text-2xl">
                <div className='flex p-1'>


                    {/* lg hidden start ---------------(mobile view) */}
                    <div className="lg:hidden">
                        {isMenuOpen ?
                            // <button title="Open Menu" className="p-2 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50 z-50"
                            //     onClick={handleMenuMobile}
                            // >
                            //     <XCircleIcon className='w-8' />
                            // </button>
                            ""
                            :
                            <button title="Open Menu" className="p-2 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                                onClick={handleMenuMobile}
                            >
                                <Bars3Icon className='w-8' />
                            </button>
                        }
                        {isMenuOpen && (
                            <div
                                onClick={handleMenuMobile}
                                // className="absolute top-14 left-0 z-40 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 border"
                                className={`bg-[#f0ea97] hover:bg-[#f1e320] w-full h-full top-0 right-0 z-10 flex  items-center justify-center fixed ${isMenuOpen ? "translate-x-0" : "translate-x-full"} duration-300 transition-all`}
                            >
                                {/* <nav className='p-5'> */}
                                <button className='absolute top-10 left-10'                                >
                                    <XCircleIcon className='w-8' />
                                </button>
                                <ul className=" grid gap-5">
                                    {menuItemsLi?.map((mi, i) => <NavLink
                                        key={i}
                                        className={`hover:bg-[#ffec00] px-[15px] py-2 mx-[1px] ${("/" + mi?.replace(" ", "")?.toLowerCase() === location?.pathname) ? "bg-[#ffec00] rounder-lg" : ""}`}
                                        to={`/${mi?.replace(" ", "")?.toLowerCase()}`}
                                        title={mi}
                                    >
                                        <li>{mi}</li>
                                    </NavLink>)}
                                    {/* {
                                        user ?
                                            <>
                                                <Link to="/myreviews" title='My Reviews'><li>My Reviews</li></Link>
                                                <Link to="/addservice" title='Add service'><li>Add service</li></Link>
                                            </>
                                            : " "
                                    } */}
                                </ul>
                                {/* </nav> */}
                            </div>
                        )}
                    </div>
                    {/* lg hidden end ------------------ */}




                    {/* name and picture start ---------------- */}
                    <Link to="" title="Sofi-Visa-Hub" className="inline-flex items-center bg-slate-300 rounded-lg p-2">
                        <img className='w-12  md:w-16 rounded-sm' src={image} alt="" />
                        <span className="ml-1 font-bold tracking-wide text-gray-800 uppercase">
                            Sofi-Visa-Hub
                        </span>
                    </Link>
                    {/* name and picture end ---------------- */}
                </div>

                <ul className="items-center hidden lg:flex">
                    {menuItemsLi?.map((mi, i) => <NavLink
                        key={i}
                        className={`hover:bg-[#ffec00] px-[15px] py-2 mx-[1px] ${("/" + mi?.replace(" ", "")?.toLowerCase() === location?.pathname) ? "bg-[#ffec00] rounder-lg" : ""}`}
                        to={`/${mi?.replace(" ", "")?.toLowerCase()}`}
                        title={mi}
                    >
                        <li>{mi}</li>
                    </NavLink>)}
                    {/* {
                        user ?
                            <>
                                <Link to="/myreviews" title='My Reviews'>My Reviews</Link>
                                <Link to="/addservice" title='Add service'>Add service</Link>
                            </>
                            : " "
                    } */}
                </ul>



                {/* Profile or log in ------------------- */}
                <ul>
                    {user?.photoURL ?
                        <Link
                            onClick={handleProfile}
                            title={user?.displayName ? user?.displayName : "No Name found, Update your name pls"}
                        >
                            <img className='w-12 h-12 rounded-full mt- mr-2 pt-2' src={user?.photoURL ? user?.photoURL : loginIcon} alt="" />
                        </Link>
                        :
                        <Link
                            onClick={handleProfile}
                            to="signin" title='Sign in Pls' className='border border-black rounded-md px-4 py-2 hover:bg-[#ffec00]'
                        >
                            <button>Sign In</button>
                        </Link>}
                </ul>
                {user && isProfileOpen && (
                    <div
                        className="absolute top-14 right-0 z-50 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 border"
                        onClick={handleProfile}
                    >
                        <Link to="profile" className="py-3 px-4 block" title='see profile'>
                            <span className="block text-sm text-gray-900 dark:text-white" >{user?.displayName ? user?.displayName : "No Name found, Update your name pls"}</span>
                            <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
                        </Link>
                        <ul className="py-1" aria-labelledby="user-menu-button">
                            <li>
                                <Link to="" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</ Link>
                            </li>
                            <li>
                                <Link to="" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</ Link>
                            </li>
                            <li>
                                <Link to="" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</ Link>
                            </li>
                            <li>
                                <Link to="" onClick={hndleLogOut} className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white hover:text-red-600">Sign out</ Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div >
            <Toaster />
        </div >
    );
};

export default Headers;



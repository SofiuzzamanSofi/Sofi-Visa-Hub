import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import image from "../../assets/sofi-visa-logo.png"
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import loginIcon from "../../assets/sign in.JPG"
import toast, { Toaster } from 'react-hot-toast';



const Headers = () => {

    const { user, setUser, logout } = useContext(AuthContext);



    // small display slider and profile slider -----------
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);


    // header / navbar items ------------
    const menuItemsLi = [
        "Home", "Services", "About Us", "Blogs"
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


                    {/* lg hidden start --------------- */}
                    <div className="lg:hidden">
                        {isMenuOpen ?
                            <button title="Open Menu" className="p-2 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <XCircleIcon className='w-8' />
                            </button>
                            :
                            <button title="Open Menu" className="p-2 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <Bars3Icon className='w-8' />
                            </button>
                        }
                        {isMenuOpen && (
                            <div className="absolute top-14 left-0 w-full rounded-lg bg-slate-100 shadow-sm">
                                <nav className='p-5'>
                                    <ul className="">
                                        {menuItemsLi.map(mi => <Link key={mi} to={`/${mi.replace(" ", "").toLowerCase()}`} title={mi}><li>{mi}</li></Link>)}
                                        {
                                            user ?
                                                <>
                                                    <Link to="/myreviews" title='My Reviews'><li>My Reviews</li></Link>
                                                    <Link to="/addservice" title='Add service'><li>Add service</li></Link>
                                                </>
                                                : " "
                                        }
                                    </ul>
                                </nav>


                            </div>
                        )}
                    </div>
                    {/* lg hidden end ------------------ */}




                    {/* name and picture start ---------------- */}
                    <Link to="" title="Sofi-Visa-Hub" className="inline-flex items-center bg-slate-300 rounded-lg p-2">
                        <img className='w-12 md:w-16 rounded-sm' src={image} alt="" />
                        <span className="ml-1 font-bold tracking-wide text-gray-800 uppercase">
                            Sofi-Visa-Hub
                        </span>
                    </Link>
                    {/* name and picture end ---------------- */}
                </div>

                <ul className="items-center hidden space-x-8 lg:flex">
                    {menuItemsLi.map(mi => <Link key={mi} to={`/${mi.replace(" ", "").toLowerCase()}`} title={mi}><li>{mi}</li></Link>)}
                    {
                        user ?
                            <>
                                <Link to="/myreviews" title='My Reviews'>My Reviews</Link>
                                <Link to="/addservice" title='Add service'>Add service</Link>
                            </>
                            : " "
                    }
                </ul>



                {/* Profile or log in ------------------- */}
                <ul>
                    {user?.photoURL ?
                        <Link onClick={() => setIsProfileOpen(!isProfileOpen)} title={user?.displayName ? user?.displayName : "No Name found, Update your name pls"} ><img className='w-12 rounded-full mt- mr-2 pt-2' src={user?.photoURL ? user?.photoURL : loginIcon} alt="" /></Link>
                        :
                        <Link onClick={() => setIsProfileOpen(!isProfileOpen)} to="signin" title='Sign in Pls' className='border border-black rounded-md px-4 py-2 hover:bg-[#ffec00]'><button>Sign In</button></Link>}
                </ul>
                {user && isProfileOpen && (
                    <div className="absolute top-14 right-0 z-50 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 border" >
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



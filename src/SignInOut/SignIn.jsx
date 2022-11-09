import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import toast, { Toaster } from 'react-hot-toast';
import SignSocial from './SignSocial';

const SignIn = () => {


    // auth information ------------
    const { error, setError, forgotPassword, login } = useContext(AuthContext);
    const error2 = error.replace('(', "");
    const error3 = error2.replace(')', "");
    const error4 = error3.replace(/Firebase: Error/gi, "Error: ");


    // navigate -----------
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";


    // email or form controlled by react dom, password-type-text/password ---------
    const [showPassword, setShowPassword] = useState(true);
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    });
    const handleEmailChange = event => {
        setUserInfo({ ...userInfo, email: event.target.value });
    };
    const handlePasswordChange = event => {
        setUserInfo({ ...userInfo, password: event.target.value });
    };


    const handleSubmit = event => {
        event.preventDefault();
        // const form = event.target;
        const email = userInfo.email;
        const password = userInfo.password;
        console.log(email, password);


        // login function ------------------
        login(email, password)
            .then(result => {
                const user = result.user;
                toast.success(`successfully login, ${user?.displayName}`);
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error?.message || "Username or Email Or Password Don't Match")
                console.log(error);
                toast.error("Sign In Failed.")
            })

    };



    // forget password send -------
    const handleForgetPassword = () => {
        forgotPassword(userInfo.email)
            .then(() => {
                toast.success('Password reset email send successful, pls check your email, or spam folder to reset your password..')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(`${errorCode || errorMessage}`)
            });
    };




    return (
        <div className="m-auto max-w-sm xl:mt-[8%]">
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 border-4 bg-sky-100">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit} noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-400">Email or Username</label>
                        <input type="email" name="email" id="username" placeholder="Email or Username" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required onChange={handleEmailChange} value={userInfo.email} />
                    </div>
                    <div className="space-y-1 text-sm relative">
                        <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                        <input type={showPassword ? "password" : "text"} name="password" placeholder="input password pls" className=" w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required onChange={handlePasswordChange} value={userInfo.password} />
                        {showPassword ? <EyeIcon className='w-6 absolute top-8 right-2 cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> : <EyeSlashIcon className='w-6 absolute top-8 right-2 cursor-pointer' onClick={() => setShowPassword(!showPassword)} />}
                        <div className="flex justify-between text-xs dark:text-gray-400">
                            <Link to=""><span className='text-xs text-red-600 '>{error ? error4 : " "}</span></Link>  <Link to="" onClick={handleForgetPassword} className='hover:underline text-xs'>Forgot Password?</Link>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">Sign in</button>
                </form>

                {/* Social icons ----------- */}
                <SignSocial />
                <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
                    <Link to="/signup" className="underline dark:text-gray-100">Sign up</Link>
                </p>
            </div>
            <Toaster />
        </div>
    );
};

export default SignIn;
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import toast from 'react-hot-toast';
import SignSocial from './SignSocial';

const SignUp = () => {


    // auth information ------------
    const { error, setError, createNewUser, updateNamePhoto } = useContext(AuthContext);
    const error2 = error.replace('(', "");
    const error3 = error2.replace(')', "");
    const error4 = error3.replace(/Firebase: Error/gi, "Error: ");


    // navigate -----------
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    useEffect(() => {
        setError("");
    }, [location?.pathname])

    // email or form controlled by react dom, password-type-text/password ---------
    const [showPassword, setShowPassword] = useState(true);
    const [userInfo, setUserInfo] = useState({
        name: "",
        photo: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const handleNameChange = event => {
        setUserInfo({ ...userInfo, name: event.target.value });
    };
    const handlePhotoChange = event => {
        setUserInfo({ ...userInfo, photo: event.target.value });
    };
    const handleEmailChange = event => {
        setUserInfo({ ...userInfo, email: event.target.value });
    };
    const handlePasswordChange = event => {
        setUserInfo({ ...userInfo, password: event.target.value });
    };
    const handleConfirmPasswordChange = event => {
        setUserInfo({ ...userInfo, confirmPassword: event.target.value });
    };


    const handleSubmit = event => {
        event.preventDefault();
        // const form = event.target;
        const name = userInfo.name;
        const photo = userInfo?.photo || "";
        const email = userInfo.email;
        const password = userInfo.password;
        const confirmPassword = userInfo.confirmPassword;
        if (!(password === confirmPassword)) {
            setError("Password don't match.")
            toast.error("Password don't match.");
            return;
        };
        console.log(name, photo, email, password, confirmPassword);
        setError("");

        // create new user------------------
        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                console.log("new uer created,", user)
                updateNamePhoto(name, photo)
                    .then(() => {
                        // alert(`successfully create the user :, ${user?.displayName}`)
                        toast.success(`successfully create the user :, ${user?.displayName}`);
                    }).catch((error) => {
                        console.log("error to name photo upload:-", error);
                    });
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error?.message || "Some Thing happend");
                console.log(error);
                toast.error("Create User Failed.");
            })

    };





    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md px-8 py-4 space-y-3 rounded-xl border border-black">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <form onSubmit={handleSubmit} noValidate="" action="" className="space-y-2 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-400">Full Name</label>
                        <input type="text" name="name" placeholder="Full Name" className="w-full px-2 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required onChange={handleNameChange} value={userInfo.name} />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-400">Photo URL</label>
                        <input type="url" name="photo" placeholder="Photo Url" className="w-full px-2 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" onChange={handlePhotoChange} value={userInfo.photo} />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block dark:text-gray-400">Email</label>
                        <input type="email" name="email" placeholder="Email" className="w-full px-2 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required onChange={handleEmailChange} value={userInfo.email} />
                    </div>
                    <div className="space-y-1 text-sm relative">
                        <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                        <input type={showPassword ? "password" : "text"} name="password" placeholder="input password pls" className=" w-full px-2 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required onChange={handlePasswordChange} value={userInfo.password} />
                        {showPassword ? <EyeIcon className='w-6 absolute top-8 right-2 cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> : <EyeSlashIcon className='w-6 absolute top-8 right-2 cursor-pointer' onClick={() => setShowPassword(!showPassword)} />}
                    </div>
                    <div className="space-y-1 text-sm relative">
                        <label htmlFor="password" className="block dark:text-gray-400">Retype Password</label>
                        <input type={showPassword ? "password" : "text"} name="confirmPassword" placeholder="retype password" className=" w-full px-2 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" required onChange={handleConfirmPasswordChange} value={userInfo.confirmPassword} />
                        {showPassword ? <EyeIcon className='w-6 absolute top-8 right-2 cursor-pointer' onClick={() => setShowPassword(!showPassword)} /> : <EyeSlashIcon className='w-6 absolute top-8 right-2 cursor-pointer' onClick={() => setShowPassword(!showPassword)} />}
                        <div className="flex justify-between text-xs dark:text-gray-400">
                            <Link to=""><span className='text-xs text-red-600 '>{error ? error4 : " "}</span></Link>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-xl bg-[#ffec00]">Sign Up</button>
                </form>

                {/* Social icons ----------- */}
                <SignSocial />
                <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                    <Link to="/signin" className="underline dark:text-gray-100">Sign In</Link>
                </p>
            </div>
        </div>
    );
};
export default SignUp;
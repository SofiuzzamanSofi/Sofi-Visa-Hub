import ErrorRoute from "../../Components/ErrorRoute/ErrorRoute";
import Home from "../../Components/Homes/Home/Home";
import Main from "../../Layout/Main";
import SignIn from "../../SignInOut/SignIn";
import SignUp from "../../SignInOut/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {

        path: "/", element: <Main />, errorElement: <ErrorRoute />, children: [
            { path: "/", element: <Home /> },
            { path: "/home", element: <Home /> },
        ]
    },
    { path: "/signin", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
])



export default router;
import Blogs from "../../Components/Blogs/Blogs";
import AddService from "../../Components/ClientSections/AddService/AddService";
import MyReviews from "../../Components/ClientSections/MyReviews/MyReviews";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import Home from "../../Components/Homes/Home/Home";
import ServiceAll from "../../Components/Homes/ServiceRelated/ServiceAll/ServiceAll";
import ServicesDetails from "../../Components/Homes/ServiceRelated/ServiceDetails/ServicesDetails";
import Services from "../../Components/Homes/ServiceRelated/Services/Services";
import Main from "../../Layout/Main";
import SignIn from "../../SignInOut/SignIn";
import SignUp from "../../SignInOut/SignUp";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const { createBrowserRouter } = require("react-router-dom");



const router = createBrowserRouter([
    {

        path: "/", element: <Main />, errorElement: <ErrorPage />, children: [
            { path: "/", element: <Home /> },
            { path: "/home", element: <Home /> },
            { path: "/services", element: <ServiceAll /> },
            { path: "/myreviews", element: <PrivetRoute><MyReviews /></PrivetRoute> },
            { path: "/addservice", element: <PrivetRoute><AddService /></PrivetRoute> },
            { path: "/blogs", element: <Blogs /> },
            { path: "/service/:id", element: <ServicesDetails />, loader: ({ params }) => fetch(`https://sofi-visa-hub-server-sofiuzzamansofi.vercel.app/service/${params.id}`) },
        ]
    },
    { path: "/signin", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
])

export default router;
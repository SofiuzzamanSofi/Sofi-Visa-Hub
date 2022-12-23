import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorRoute = () => {

    const error = useRouteError();

    return (
        <section className="min-h-screen flex justify-center items-center">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">

                        {/* error status --------------- */}
                        <span className="sr-only">Error</span>{error?.status}
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 dark:text-gray-400">But don't worry, you can find plenty of other things on our homepage.</p>
                    <Link to="/" className="px-8 py-3 font-semibold rounded bg-yellow-300 hover:bg-yellow-400">Back to homepage</Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorRoute;
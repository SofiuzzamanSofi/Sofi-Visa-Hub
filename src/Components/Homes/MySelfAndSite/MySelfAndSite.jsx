import React from 'react';
import { Link } from 'react-router-dom';

const MySelfAndSite = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 bg-zinc-100">
            <div className="container max-w-6xl py-6 mx-auto space-y-6 sm:space-y-12">
                <Link className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                    <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500 rounded-xl" />
                    <div className="p-6 space-y-2 lg:col-span-5 rounded-xl border">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Sofi-Visa-Hub, <br /> Pro. Md. Sofiuzzaman Sofi</h3>
                        <p>I am a visa specalist. This site Helps you to make decission , Which country will prefer for you and your family or your son, Who wants to settle to abroad for study,business ,works or others . It's time to check others and then you can come to me. I am always glad to see your wish, See you soon, with abroad. <br /> <br /> Nowdays It's not easy to settle abroad, But I can handle this . So you feel like no hassle. Pls come to my offile and have a cup of tea. or join us with your email to update about me and my work. <br />Thank You.</p>
                    </div>
                </Link>
                <div className="flex justify-center">
                    <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts Soon...</button>
                </div>
            </div>
        </section>
    );
};

export default MySelfAndSite;
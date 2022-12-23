import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="p-6 bg-zinc-100">
            <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Getting started</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <Link to="">Installation </Link>
                        <Link to="">Release Notes </Link>
                        <Link to="">Upgrade Guide </Link>
                        <Link to="">Using with Preprocessors </Link>
                        <Link to="">Optimizing for Production </Link>
                        <Link to="">Browser Support </Link>
                        <Link to="">IntelliSense </Link>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Core Concepts</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <Link to="">Utility-First </Link>
                        <Link to="">Responsive Design </Link>
                        <Link to="">Hover, Focus, &amp; Other States </Link>
                        <Link to="">Dark Mode </Link>
                        <Link to="">Adding Base Styles </Link>
                        <Link to="">Extracting Components </Link>
                        <Link to="">Adding New Utilities </Link>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Customization</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <Link to="">Configuration </Link>
                        <Link to="">Theme Configuration </Link>
                        <Link to="">Breakpoints </Link>
                        <Link to="">Customizing Colors </Link>
                        <Link to="">Customizing Spacing </Link>
                        <Link to="">Configuring Variants </Link>
                        <Link to="">Plugins </Link>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Community</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <Link to="">GitHub </Link>
                        <Link to="">Discord </Link>
                        <Link to="">Twitter </Link>
                        <Link to="">YouTube </Link>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center px-6 pt-12 text-sm">
                <span className="dark:text-gray-400">© Copyright 2022. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;
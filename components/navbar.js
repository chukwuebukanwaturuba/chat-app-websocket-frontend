"use client"
import React, {useState} from "react";
import {useRouter} from 'next/navigation';
import Maybe from "./maybe";
import useSWR from "swr";
import storage from "@/utils/storage";
import checkLogin from "@/utils/checkLogin";
import { SlMenu } from "react-icons/sl";
import { cn } from "@/utils/helper";
import { AiOutlineClose } from "react-icons/ai";




const Navbar = () => {
    const {data: currentUser} = useSWR("user", storage);
    const isLoggedIn = checkLogin(currentUser);
    const router = useRouter();
    const [showMenu, setShowMenu] = useState(false);

    const handleSignOut = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 relative">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Chat App</span>
                </a>

                <Maybe test={isLoggedIn}>
                    <div className={cn('w-full md:block md:w-auto', showMenu ? 'block': 'hidden',)} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    {currentUser?.name}
                                </a>
                            </li>
                            <li>
                                <a onClick={handleSignOut}
                                   className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>
                </Maybe>

                <Maybe test={!isLoggedIn}>
                    <div className={cn('w-full md:block md:w-auto', showMenu ? 'block': 'hidden',)} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/login" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                   aria-current="page">
                                    Sign In
                                </a>
                            </li>
                            <li>
                                <a href="/register" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Sign Up
                                </a>
                            </li>
                        </ul>
                    </div>
                </Maybe>
            </div>
            <div className="absolute top-[20px] right-[20px] hidden sm:block">
                <button className="text-2xl" onClick={() => setShowMenu(!showMenu)}>
                    {
                        showMenu ? <AiOutlineClose/> : <SlMenu/>
                    }
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

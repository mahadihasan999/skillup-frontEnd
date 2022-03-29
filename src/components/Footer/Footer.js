import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin, FiYoutube } from 'react-icons/fi';
const Footer = () => {
    const history = useHistory()
    return (

        <footer class="footer-1 news py-8 sm:py-12 ">
            <div class="container mx-auto px-4">
                <div class="sm:flex sm:flex-wrap justify-center sm:-mx-4 md:py-4">
                    <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
                        <h5 class="text-xl font-bold mb-6">Features</h5>
                        <ul class="list-none footer-links">
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Most Applied Courses</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">All Circular</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Best Bike</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">User Login</Link>
                            </li>

                        </ul>
                    </div>
                    <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
                        <h5 class="text-xl font-bold mb-6">News</h5>
                        <ul class="list-none footer-links">
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">About </Link>
                            </li>
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Courses vacancy</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Courses review</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Final resource</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                        <h5 class="text-xl font-bold mb-6">About</h5>
                        <ul class="list-none footer-links">
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Team</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Locations</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Privacy</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Terms</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                        <h5 class="text-xl font-bold mb-6">Help</h5>
                        <ul class="list-none footer-links">
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Support</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Help Center</Link>
                            </li>
                            <li class="mb-2">
                                <Link to="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                        <p className="w-50 h-12 cursor-pointer text-3xl font-bold text-gray-700" alt="logo" onClick={() => history.push('/')}>Skill <span className="bg-primary px-2  text-white poppins rounded-full ring-red-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105">Up</span></p>


                        <div className="">
                            <p className='text-wrap'>
                                Our mission is to create best course that provide opportunities for all seekers.
                            </p>

                        </div>

                    </div>

                </div>


            </div>
        </footer>
    );
};

export default Footer;
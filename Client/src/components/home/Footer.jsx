import React from 'react'
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaXTwitter,
    FaEnvelope,
} from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

            <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-500 bg-gradient-to-r from-white via-orange-200/50 to-white  pt-10 sm:mt-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
                    <div className="sm:col-span-2 lg:col-span-1">
                        <a href="#">
                            <img src='/logo.svg' alt='logo' className='h-11 w-auto' />
                        </a>
                        <p className="text-sm/7 mt-6">Land your dream job with AI-powered Resume.
                            Create, edit, and download professional resume with AI- powered assistance.

                        </p>
                    </div>
                    <div className="flex flex-col lg:items-center lg:justify-center">
                        <div className="flex flex-col text-sm space-y-2.5">
                            <h2 className="font-semibold mb-5 text-gray-800">Easy Access</h2>
                            <a className="hover:text-orange-600 transition" href="#">Home</a>
                            <a className="hover:text-orange-600 transition" href="#features">Featurs </a>
                            <a className="hover:text-orange-600 transition" href="#testimonials">Testimonial</a>
                            <a className="hover:text-orange-600 transition" href="#contact">Contacts</a>
                        </div>
                    </div>
                    {/* <div>
                        <h2 className="font-semibold text-gray-800 mb-5">Developed by</h2>
                        <div className="text-sm space-y-6 max-w-sm">
                            <h3>Akash Mondal</h3>
                            <p> Durbajpur, Birbhum, West Bengal, 73123</p>
                            
                        </div>
                    </div> */}

                    <div>
                        <h2 className="mb-5 font-semibold text-gray-800">
                            Developed By
                        </h2>

                        <div className="max-w-sm space-y-3 text-sm">

                            <h3 className="text-lg font-bold text-gray-900">
                                Akash Mondal
                            </h3>

                            <p className="text-gray-500">
                                Dubrajpur, Birbhum, West Bengal
                            </p>

                            <div className="flex items-center gap-3 pt-2">

                                <a
                                    href="https://github.com/AkashMondal27"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                                >
                                    <FaGithub size={18} />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/akashmondal27/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                                >
                                    <FaLinkedin size={18} />
                                </a>

                                <a
                                    href="https://www.instagram.com/akash__diaries"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                                >
                                    <FaInstagram size={18} />
                                </a>

                                <a
                                    href="https://x.com/akashmondal27"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="X"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                                >
                                    <FaXTwitter size={18} />
                                </a>

                                <a
                                    href="akashmondal102003@gmail.com"
                                    aria-label="Email"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                                >
                                    <FaEnvelope size={18} />
                                </a>

                            </div>
                        </div>
                    </div>

                </div>
                <p className="py-4 text-center border-t mt-6 border-slate-200">
                    Copyright 2025 © <a href="https://www.linkedin.com/in/akashmondal27/">resume <span className='font-bold'>.</span>  -</a> All Right Reserved.
                </p>
            </footer>
        </div>
    )
}

export default Footer

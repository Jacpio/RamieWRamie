import React from 'react';
import { FaRegCopyright } from "react-icons/fa";
export default function Footer({className=""}) {
    return (
            <footer className={`bg-white w-full ${className}`}>
                <div className="w-full mx-auto px-4 md:py-2">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <h1 className="font-bold text-lg text-primary-dark flex items-center gap-2">
                            Ramię W Ramię <FaRegCopyright /> 2024
                        </h1>
                        <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Home</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Wolontariat</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Żywność</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Chemia domowa</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Ubrania</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
    );
}
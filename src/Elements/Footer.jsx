import React from 'react';
export default function Footer() {
    return (
            <footer className="bg-white mt-auto w-full p-4">
                <div className="w-full mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <h1 className="font-bold text-2xl text-primary-dark">
                            RamięWRamię
                        </h1>
                        <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Home</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">O nas</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Usługi</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Kontakt</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
    );
}
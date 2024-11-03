import React, { useState } from 'react';
import NavLink from "./NavLink.jsx";
import SearchInput from "./SearchInput.jsx";
import {CgProfile} from "react-icons/cg";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white text-primary-dark shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="text-2xl font-bold text-primary-dark">
                            RamięWRamię
                        </a>
                    </div>
                    <SearchInput description="Wpisz np.: nazwę organizacji"/>
                    <div className="hidden lg:flex space-x-8 text-primary-dark">
                        <NavLink href="/" label="Home" />
                        <NavLink href="/about" label="O Nas" />
                        <NavLink fontSize="2xl" href="/login" label={<CgProfile/>} />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-primary-dark transition hover:text-secondary-dark focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <NavLink href="/" label="Home" mobile />
                            <NavLink href="/about" label="O Nas" mobile />
                            <NavLink href="/services" label="Usługi" mobile />
                            <NavLink href="/contact" label="Kontakt" mobile />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
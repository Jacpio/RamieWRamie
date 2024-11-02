import React, { useState } from 'react';
import NavLink from "./NavLink.jsx";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-primary text-white shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="text-2xl font-bold text-white">
                            RamięWRamię
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {/** Linki nawigacyjne */}
                        <NavLink href="/" label="Home" />
                        <NavLink href="/about" label="O Nas" />
                        <NavLink href="/services" label="Usługi" />
                        <NavLink href="/contact" label="Kontakt" />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-white hover:text-secondary-dark focus:outline-none transition-colors"
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
                    <div className="md:hidden">
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
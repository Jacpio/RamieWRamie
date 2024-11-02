import React from "react";

export default function NavLink({ href, label, mobile = false }) {
    return (
        <a
            href={href}
            className={`relative ${mobile ? "block" : "inline-block"} px-3 py-2 rounded-lg font-semibold text-white transition-all duration-200 
      bg-gradient-to-r from-primary to-primary-light hover:from-secondary-dark hover:to-secondary rounded-full shadow-lg transform hover:scale-105`}
        >
            {label}
        </a>
    );
}
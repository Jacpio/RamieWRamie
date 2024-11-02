import React from "react";

export default function NavLink({ href, label, mobile = false }) {
    return (
        <a
            href={href}
            className={`relative ${mobile ? "block" : "inline-block"} px-3 py-2  font-semibold text-white transition-all duration-200 transform hover:scale-105`}
        >
            {label}
        </a>
    );
}
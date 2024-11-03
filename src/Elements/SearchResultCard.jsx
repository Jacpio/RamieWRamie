import React from 'react';
import {FaSearch} from "react-icons/fa";
import "../main.css"
// eslint-disable-next-line react/prop-types
export default function SearchResultCard({title, description, tags, photo}) {
    return (
        <div className="flex max-w-lg h-32 bg-gray-200">
            <img src={photo} className="object-cover w-32 p-1 h-32" alt="" />
            <div className="flex flex-col items-center w-full">
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p>{description}</p>
            </div>

            <span>{tags}</span>

        </div>
    )
}


import React from 'react';
import {FaSearch} from "react-icons/fa";
import "../main.css"
// eslint-disable-next-line react/prop-types
export default function SearchResultCard({title, description, tags, photo, className}) {
    return (
        <div className={className}>
            <div className="border-2 border-gradient-l-red-blue border-primary-light border-opacity-50 cursor-pointer flex w-full h-32 bg-white rounded-lg text-gray-600 shadow-md hover:shadow-xl translate-y-1 hover:translate-y-0 transition ">
                <img src={photo} className="object-cover w-48 h-32 p-3" alt=""/>
                <div className="flex flex-col justify-around flex-grow">
                    <div className="flex flex-col items-center w-full">
                        <h3 className="text-xl font-semibold mb-2 text-primary-light">{title}</h3>
                        <p>{description}</p>

                    </div>
                    <span>{tags}</span>
                </div>

            </div>
        </div>
    )
}


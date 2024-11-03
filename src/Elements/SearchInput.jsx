import React from 'react';
import {FaSearch} from "react-icons/fa";
import "../main.css"
// eslint-disable-next-line react/prop-types
export default function SearchInput({description}) {
    return (
        <form className="w-7/20" action="/search" method="GET">
            <label htmlFor="search"
                   className="mb-2 text-sm font-medium text-gray-900 sr-only ">Wyszukaj</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <FaSearch />
                </div>
                <input type="search" id="search" name="queue"
                       className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-primary-dark"
                       placeholder={description} required/>
                <button type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-primary-dark hover:bg-secondary-dark focus:ring-4  font-medium rounded-lg text-sm px-4 py-2 ">Wyszukaj
                </button>
            </div>
        </form>
    )
}


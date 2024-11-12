import React, {useEffect} from 'react';
import Navbar from '/src/Elements/Navbar.jsx';
import SearchResultCard from '/src/Elements/SearchResultCard.jsx';
import Footer from '/src/Elements/Footer.jsx';
import searchData from '../data/searchResults.json'
import photo from "../assets/DM-II-grafika.png"
import {useSearchParams} from "react-router-dom";
import caritas from "../assets/caritas.webp"
import adullam from "../assets/adullam.png"
import podaj_dalej from "../assets/logo-podaj-dalej-2.png"
import chrzescijanskie from "../assets/Crzescianskie_stowarzyszenie-dobroczynne.png"
import sm from "../assets/walczę_z_sm.jpg"
export default function SearchResults() {
    const [searchResults, setSearchResults] = React.useState([]);
    const [photos, setPhotos] = React.useState([]);
    const [searchParams] = useSearchParams();
    useEffect(() => {
        setSearchResults(searchData);
        setPhotos([caritas,adullam,podaj_dalej,chrzescijanskie,sm])
    },[])

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Navbar/>
            <section className="bg-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-6 animate-fade-down animate-once animate-duration-1000 animate-alternate">
                        Wyniki wyszukiwania{searchParams.has("query") ? ": " + searchParams.get("query") : ''}
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12 animate-fade-up animate-once animate-duration-[800ms] animate-alternate">
                        Znaleziono {searchData.length} organizacji
                    </p>


                    <div className="flex flex-col gap-5 justify-center max-w-4xl mx-auto">
                        {searchResults ? searchResults.map((result, i) => (
                            <SearchResultCard key={i} className={`animate-fade-up animate-once animate-delay-[400ms] animate-ease-out animate-normal`} title={result.name} description={result.description} photo={photos[i]} tags={result.tags} city={result.city}/>
                        )) : (<></>)}

                    </div>

                </div>
            </section>
        </div>
    );
}
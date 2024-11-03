import React from 'react';
import Navbar from '/src/Elements/Navbar.jsx';
import SearchResultCard from '/src/Elements/SearchResultCard.jsx';
export default function SearchResults() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Navbar/>
            <section className="bg-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-6 animate-fade-down animate-once animate-duration-1000 animate-alternate">
                        Wyniki wyszukiwania
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12 animate-fade-up animate-once animate-duration-[800ms] animate-alternate">
                        Znaleziono 13 organizacji
                    </p>
                    <div className="flex justify-between max-w-2xl mx-auto mb-12 animate-fade-up animate-once animate-duration-[800ms] animate-alternate">
                        <p className="text-md text-gray-700">sortuj</p>
                        <p className="text-md text-gray-700">filtruj</p>
                    </div>
                    <SearchResultCard title="tytul" description="opis" photo="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" tags="nigga" />
                </div>
            </section>
        </div>
    );
}
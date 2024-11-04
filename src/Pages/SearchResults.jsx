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


                    <div className="flex flex-col gap-5 justify-center max-w-2xl mx-auto">
                        <SearchResultCard className="animate-fade-up animate-once animate-delay-[100ms] animate-ease-out animate-normal" title="Caritas" description="chreściańska tego typu lubię małe dzieci elo benc." photo="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" tags="pomoc biednym, ciuchy, tak" />
                        <SearchResultCard className="animate-fade-up animate-once animate-delay-[250ms] animate-ease-out animate-normal" title="tytul" description="opis" photo="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" tags="tagi" />
                        <SearchResultCard className="animate-fade-up animate-once animate-delay-[400ms] animate-ease-out animate-normal" title="tytul" description="opis" photo="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" tags="nigga" />
                        <SearchResultCard className="animate-fade-up animate-once animate-delay-[650ms] animate-ease-out animate-normal" title="tytul" description="opis" photo="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" tags="nigga" />
                        <SearchResultCard className="animate-fade-up animate-once animate-delay-[800ms] animate-ease-out animate-normal" title="tytul" description="opis" photo="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" tags="nigga" />
                        <SearchResultCard className="animate-fade-up animate-once animate-delay-[950ms] animate-ease-out animate-normal" title="tytul" description="opis" photo="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" tags="nigga" />
                        <SearchResultCard className="animate-fade-up animate-once animate-delay-[1100ms] animate-ease-out animate-normal" title="tytul" description="opis" photo="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" tags="nigga" />
                        <SearchResultCard className="animate-fade-up animate-once animate-delay-[1250ms] animate-ease-out animate-normal" title="tytul" description="opis" photo="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp" tags="nigga" />
                    </div>

                </div>
            </section>
        </div>
    );
}
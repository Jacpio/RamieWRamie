import React from 'react';

export default function Banner() {
    return (
        <section className="relative bg-primary-light text-white py-20">
            <div className="container mx-auto px-6 text-center">
                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-down animate-once animate-duration-1000 animate-alternate">
                    Ramię W Ramię - Pomagaj z nami
                </h1>
                {/* Subtitle */}
                <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto animate-fade-up animate-once animate-duration-[800ms] animate-alternate">
                    Łączymy wolontariuszy z organizacjami pomocowymi, tworzymy społeczność gotową do działania i wspieramy lokalne inicjatywy.
                    Dołącz do nas i zyskaj dostęp do wielu kategorii pomocy.
                </p>
                {/* Contact Button */}
                <a
                    href="#kontakt"
                    className=" animate-rotate-x animate-once animate-duration-[800ms] inline-block bg-white text-primary-dark hover:bg-gray-200 font-semibold py-3 px-8 rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
                >
                    Skontaktuj się z nami
                </a>
            </div>
        </section>
    );
}
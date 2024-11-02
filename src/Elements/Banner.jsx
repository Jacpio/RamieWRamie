import React from 'react';

export default function Banner() {
    return (
        <section className="relative bg-primary-light text-white py-20">
            <div className="container mx-auto px-6 text-center">
                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Ramię W Ramię - Pomagaj z nami
                </h1>
                {/* Subtitle */}
                <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                    Łączymy wolontariuszy z organizacjami pomocowymi, tworzymy społeczność gotową do działania i wspieramy lokalne inicjatywy.
                    Dołącz do nas i zyskaj dostęp do wielu kategorii pomocy.
                </p>
                {/* Contact Button */}
                <a
                    href="#kontakt"
                    className="inline-block bg-gradient-to-r from-primary to-primary-dark text-white font-semibold py-3 px-8 rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
                >
                    Skontaktuj się z nami
                </a>
            </div>
        </section>
    );
}
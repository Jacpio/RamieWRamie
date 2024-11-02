import React from 'react';
import { FaHandHoldingHeart, FaMapMarkerAlt, FaTasks } from 'react-icons/fa';

export default function MainSection() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-primary mb-6">
                    Jakie funkcje oferuje RamięWRamię?
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
                    RamięWRamię łączy wolontariuszy z organizacjami pomocowymi, pozwala zarządzać zadaniami, przypomnieniami oraz lokalizacjami akcji. Tworzymy społeczność gotową do działania, wspierając lokalne inicjatywy w każdym zakątku.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="p-6 bg-primary-light rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        <FaHandHoldingHeart className="text-4xl text-secondary mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold text-white mb-2">Łączenie Wolontariuszy</h3>
                        <p className="text-gray-100">
                            Pozwala na łatwe znalezienie organizacji potrzebujących wsparcia w różnych kategoriach pomocy.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="p-6 bg-primary-light rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        <FaMapMarkerAlt className="text-4xl text-secondary mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold text-white mb-2">Wsparcie lokalnych inicjatyw</h3>
                        <p className="text-gray-100">
                            Dostęp do mapy z aktualnymi akcjami w okolicy oraz bezpośredni kontakt z organizatorami.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="p-6 bg-primary-light rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        <FaTasks className="text-4xl text-secondary mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold text-white mb-2">Zarządzanie Zadaniami</h3>
                        <p className="text-gray-100">
                            Funkcje przypomnień i zarządzania zadaniami, które ułatwiają organizację czasu dla wolontariuszy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
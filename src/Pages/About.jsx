import Navbar from "../Elements/Navbar.jsx";
import SearchResultCard from "../Elements/SearchResultCard.jsx";
import React from "react";
import {FaHandHoldingHeart, FaMapMarkerAlt, FaTasks} from "react-icons/fa";

export default function About () {
    return (
        <>
            <Navbar/>
            <section className="bg-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-primary mb-6 animate-fade-down animate-once animate-duration-1000 animate-alternate">
                        O nas
                    </h2>
                    <div className="flex flex-col justify-center  items-center">
                        <p className="max-w-3xl mb-6 text-lg text-gray-700">
                            <span className="text-lg font-bold">Witamy w Ramię W Ramię</span> – platformie, która stawia
                            na wspólne działanie, łącząc wolontariuszy z ośrodkami i
                            organizacjami pomocowymi. Naszym celem jest <strong>stworzenie przestrzeni, gdzie każdy, kto
                            chce
                            pomagać, może </strong>
                            w prosty sposób znaleźć potrzebujących wsparcia w swojej okolicy. <strong>Budujemy
                            społeczność</strong>,
                            która nie tylko
                            odpowiada na potrzeby chwili, ale także integruje ludzi o podobnych wartościach, tworząc
                            razem <strong>pozytywny
                            wpływ</strong> na lokalne społeczności.
                        </p>
                        <p className="max-w-2xl text-lg text-gray-700 mb-6">
                            Ramię W Ramię powstało z myślą o <strong>łączeniu wolontariuszy</strong> z organizacjami
                            pomocowymi, które każdego dnia realizują ważne społecznie inicjatywy. Wiemy, że <strong>każda
                            pomoc się liczy</strong> , dlatego ułatwiamy dostęp do działań pomocowych na wielu
                            poziomach, umożliwiając jednocześnie efektywne zarządzanie zadaniami i inicjatywami. Dzięki
                            naszej platformie wolontariusze zyskują dostęp do wielu kategorii wsparcia – od pomocy
                            rzeczowej, przez zbiórki, aż po wsparcie osób starszych i potrzebujących.
                        </p>
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-up animate-once animate-duration-[800ms] animate-delay-75">
                            <div
                                className="p-6 bg-secondary rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                                <h3 className="text-xl font-semibold text-white mb-2">Łączenie Wolontariuszy</h3>
                                <p className="text-white font-semibold">
                                    Nasza platforma pozwala szybko znaleźć organizacje i ośrodki wymagające wsparcia w różnych kategoriach. Wolontariusze mogą wyszukiwać działania zgodnie z ich zainteresowaniami oraz umiejętnościami, co umożliwia efektywne angażowanie się w lokalne inicjatywy.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div
                                className="transform hover:scale-105 p-6 bg-secondary rounded-lg shadow-lg hover:shadow-xl transition duration-300 animate-fade-up animate-once animate-duration-[800ms] animate-delay-200">
                                <h3 className="text-xl font-semibold text-white mb-2">Zarządzanie Zadaniami</h3>
                                <p className="text-white font-semibold">
                                    Funkcje przypomnień i zarządzania zadaniami, które ułatwiają organizację czasu dla
                                    wolontariuszy.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
            <div>

            </div>
        </>

    )
}
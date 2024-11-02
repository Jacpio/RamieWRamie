import React from 'react';
import Navbar from '/src/Elements/Navbar.jsx'; // Upewnij się, że Navbar jest odpowiednio zaimportowany
import InputText from '/src/Elements/InputText.jsx';
export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Nagłówek */}
            <Navbar />

            {/* Główna sekcja logowania */}
            <div className="flex flex-grow items-center justify-center py-12 px-6">
                <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
                    <h2 className="text-3xl font-bold text-primary text-center mb-8">
                        Logowanie
                    </h2>

                    {/* Formularz logowania */}
                    <form className="space-y-6">

                        <InputText title="Login lub e-mail" description="" name="login" />

                        <InputText title="Hasło" description="" name="pass" />

                        {/* Przycisk Zaloguj */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-primary-dark transition duration-300"
                        >
                            Zaloguj
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
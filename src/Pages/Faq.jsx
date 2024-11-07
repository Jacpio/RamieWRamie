import React from 'react';
import Navbar from '../elements/Navbar';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import FaqElement from "../Elements/FaqElement.jsx";
import InputText from "../elements/InputText";
export default function Faq() {
    return (
        <>
            <Navbar/>
            <div className="flex flex-col gap-6 flex-grow items-center justify-center py-12 px-6">
                <div className="w-full max-w-4xl bg-white p-8 shadow-lg rounded-lg flex flex-col items-center">
                    <h2 className="text-3xl font-bold text-primary mb-6 animate-fade-down animate-once animate-duration-1000 animate-alternate">
                        Często zadawane pytania
                    </h2>

                    <div className="w-full px-4 mb-5">
                        <div className="mx-auto w-full max-w-lg divide-y divide-primary-dark/2 rounded-xl bg-primary/5">
                            <FaqElement question="czy jesteście żydami?" answer="tak." open="true" />
                            <FaqElement question="Czego nie tolerujemy?" answer="każdy wie czego nie tolerujemy" />
                        </div>
                    </div>
                    <p className="text-gray-700 text-lg">
                        Masz inne pytania? Skontaktuj się z nami!
                        <InputText placeholder="e-mail"/>
                        <textarea className="mt-3 block w-full rounded-lg border-none bg-secondary/5 py-1.5 px-3 text-sm/6 text-secondary-dark',
                        'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-secondary-deeper/25"
                                  placeholder="treść e-maila">

                        </textarea>
                        <button
                            type="submit"
                            className="w-full py-3 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-primary-dark transition duration-300"
                        >
                            Wyślij
                        </button>
                    </p>
                </div>

            </div>
        </>
    )
}
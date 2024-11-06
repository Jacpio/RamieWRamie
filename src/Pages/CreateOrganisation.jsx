import React, {useState} from 'react';
import Navbar from '/src/Elements/Navbar.jsx';
import {Field, Label, Radio, RadioGroup, Select} from '@headlessui/react'
import InputText from '/src/Elements/InputText.jsx';

export default function CreateOrganisation() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Navbar/>
            <div className="flex flex-grow items-center justify-center py-12 px-6">
                <div className="w-full max-w-xl bg-white p-8 shadow-lg rounded-lg">
                    <h2 className="text-3xl font-bold text-primary text-center mb-8">
                        Tworzenie organizacji
                    </h2>
                    <form className="space-y-6">
                        <InputText title="Nazwa organizacji" description="" name="name"/>
                        <InputText title="opis" description="" name="description"/>
                        <div className="px-4 ">
                            <Field>
                                <Label className="text-md mb-2 font-medium text-secondary-dark">Kategoria pomocy</Label>
                                <Select name="help_category"
                                        className="max-w-md mt-2 p-2 rounded-md w-full bg-white ring-primary-dark ring-2 text-black"
                                        aria-label="Project status">
                                    <option value="idk">Jeszcze nie wiem...</option>
                                    <option value="animals">Pomoc zwierzętom</option>
                                    <option value="homeless">Pomoc ludziom bezdomnym</option>
                                    <option value="disabled">Pomoc niepełnosprawnym</option>
                                    <option value="fundraisers">Zbiórki funduszy</option>
                                    <option value="education">Edukacja</option>
                                    <option value="Health">Zdrowie</option>
                                </Select>
                            </Field>
                        </div>
                        <InputText title="Adres" description="" name="description"/>
                        <div className="flex">
                            <InputText title="kod pocztowy" description="" name="description"/>
                            <InputText title="Miasto" description="" name="description"/>
                        </div>


                        <button
                            type="submit"
                            className="w-full py-3 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-primary-dark transition duration-300"
                        >
                            Zarejestruj
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
}
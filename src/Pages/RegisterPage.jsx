import React, {useState} from 'react';
import Navbar from '/src/Elements/Navbar.jsx';
import {Field, Label, Radio, RadioGroup, Select} from '@headlessui/react'
import InputText from '/src/Elements/InputText.jsx';

export default function RegisterPage() {
    const plans = ['Jestem bardzo często dostępny', 'Od czasu do czasu', 'Okazjonalnie']
    let [selected, setSelected] = useState(plans[0])
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Navbar/>
            <div className="flex flex-grow items-center justify-center py-12 px-6">
                <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
                    <h2 className="text-3xl font-bold text-primary text-center mb-8">
                        Rejestracja
                    </h2>
                    <form className="space-y-6">
                        <InputText title="Login" description="" name="login"/>
                        <InputText title="Imię" description="" name="name"/>
                        <InputText title="Nazwisko" description="" name="surname"/>
                        <InputText title="Numer Telefonu" description="" name="phone_number"/>
                        <InputText title="Email" description="" name="login"/>
                        <InputText title="Hasło" description="" name="pass"/>
                        <InputText title="Powtórz hasło" description="" name="pass"/>
                        <div className="px-4 ">
                            <Field>
                                <Label className="text-sm/6 mb-2 font-medium text-secondary-dark">Obszar zainteresowań</Label>
                                <Select name="status" className="max-w-md mt-2 p-2 rounded-md text-white w-full bg-primary"
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
                        <Field className="m-4">
                        <Label className="text-sm/6 mb-4 font-medium text-secondary-dark">Dostępność czasowa</Label>
                        <RadioGroup  value={selected} onChange={setSelected} aria-label="Server size">
                            {plans.map((plan) => (
                                <Field key={plan} className="flex items-center gap-2">
                                    <Radio
                                        value={plan}
                                        className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-primary-dark"
                                    >
                                        <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
                                    </Radio>
                                    <Label>{plan}</Label>
                                </Field>
                            ))}
                        </RadioGroup>
                        </Field>

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
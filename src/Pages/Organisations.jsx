import "../main.css";
import React, {useEffect, useState} from "react";
import Navbar from "../Elements/Navbar.jsx";
import data from "../data/data.json";

import {motion} from "framer-motion";
import Carousel from "../Elements/Carousel.jsx";

export default function Organisations({id}) {
    const [organisations, setOrganisations] = useState(data);
    useEffect(() => {
        setOrganisations(data);

    })
    const loadImages = async (path) => {
        return await Promise.all(
        async (path) => {
                const src = await import(`../assets/${image.file_name}`);
                return src.default;
            }
        );
    };
    return (
        <>
            <Navbar/>
            {organisations ? (
                <>
                    <Carousel images={organisations.img}/>
                    <main className="max-w-screen-2xl mx-auto">
                        <div className="flex gap-5 mt-4">
                            <section className="bg-white w-full rounded-md p-5 shadow-lg ">
                                <h1 className="text-center font-semibold mb-4 text-xl text-primary-dark">Czym się
                                    zajmujemy?</h1>
                                <div className="w-10/12 mb-5 mx-auto text-justify">{organisations.description}</div>
                                <hr className="my-5 border-black/60"/>
                                <h1 className="text-center font-semibold text-xl text-primary-dark">Dane kontaktowe</h1>
                                <div className="w-10/12 mx-auto text-justify">
                                    <p className="my-2">Adres email: <a
                                        className="text-primary-dark transition hover:underline hover:text-secondary-dark"
                                        href={"mailto:" + organisations.email}>{organisations.email}</a></p>
                                    <p className="mb-2">Numer telefonu: <a
                                        className="text-primary-dark transition hover:underline hover:text-secondary-dark"
                                        href={"tel:" + organisations.phone}> {organisations.phone}</a></p>
                                    <p>Adres organizacji: {organisations.address}</p>
                                </div>
                            </section>

                            <section className="bg-white w-full rounded-md p-5 shadow-lg">
                                <h1 className="text-center font-semibold text-xl text-primary-dark">Skontaktuj się z
                                    nami!</h1>
                                <form className="flex flex-col justify-center items-center">
                                    <div className="flex flex-col mt-5 w-10/12">
                                        <label className="text-primary-dark font-semibold mb-2">Dlaczego chciałbyś
                                            dołączyć?</label>
                                        <motion.textarea initial={{opacity: 0}} animate={{opacity: 1}}
                                                         placeholder="Chciałbym dołączyć, ponieważ..." rows="10"
                                                         autoComplete="false" autoCapitalize="on"
                                                         className="rounded-md p-2 w-full resize-none border-gray-200 ring-2 ring-primary-dark"></motion.textarea>
                                    </div>
                                    <div className="mt-5 w-10/12">
                                        <motion.button initial={{x: 200, opacity: 0}} animate={{x: 0, opacity: 1}}
                                                       className="bg-primary text-white p-3 rounded-xl">Wyślij
                                            zgłoszenie
                                        </motion.button>
                                    </div>
                                </form>
                            </section>
                        </div>
                        <div>
                            <section className="bg-white w-full rounded-md p-5 mt-5 shadow-lg">
                                <img src={loadImages(organisations.img[0])} alt={organisations.name}/>
                            </section>
                        </div>
                    </main>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </>
    )
}


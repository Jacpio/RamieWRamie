import "../main.css";
import {useEffect, useState} from "react";
import Navbar from "../Elements/Navbar.jsx";
import data from "../data/data.json";
import Slider from "../Elements/Slider.jsx";

export default function Organisations({id}) {
    const [organisations, setOrganisations] = useState(data);
    useEffect(() => {
        setOrganisations(data);
    })
    return (
        <>
            <Navbar/>
            {organisations ? (
                // <Slider img={organisations.img}/>
                <main className="max-w-screen-2xl mx-auto">
                    <div className="flex gap-1">
                        <section className="bg-white">
                            <h1>Czym się zajmujemy?</h1>
                            <div>{organisations.description}</div>
                        </section>
                        <section>
                            <h1>Skontaktuj się z nami!</h1>
                            <form>

                            </form>
                        </section>
                    </div>
                </main>
            ) : (
                <div>Loading...</div>
            )}
        </>
    )
}


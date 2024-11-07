import {FaCircleUser, FaEnvelope, FaRegStar, FaStar, FaStarHalfStroke} from "react-icons/fa6";

function ProfileView({me = false}) {
    return (
        <>
            <FaCircleUser className="text-white text-8xl my-2"/>
            <h1 className="text-xl">Jan Kowalski</h1>
            <h1 className="mt-4 px-5 text-justify text-xl">
                Zdecydowałem się pomagać potrzebującym i oddawać
                swoje nieużywane ubrania, bo widziałem, jak
                wielu ludzi w mojej społeczności zmaga się z
                brakiem podstawowych rzeczy. Kieruje mną empatia
                i chęć niesienia pomocy – wierzę, że takie
                gesty mogą poprawić komuś codzienność.
                Dzieląc się tym, czego już nie potrzebuję,
                mam nadzieję uczynić świat choć trochę lepszym miejscem.
            </h1>
            <h1 className="mt-4 text-xl">Ocena użytkownika:</h1>
            <div className="flex flex-row text-2xl">
                <FaStar className="text-yellow-400"/>
                <FaStar className="text-yellow-400"/>
                <FaStar className="text-yellow-400"/>
                <FaStarHalfStroke className="text-yellow-400"/>
                <FaRegStar className="text-yellow-400"/>
            </div>
            {me ? ( <div className="mt-4">
                <a href="#"
                   className="flex items-center justify-center rounded-md border-white border-2 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primay">
                    <FaEnvelope className={"mr-2"}/>
                    Wiadomość
                </a>
            </div>): null}

        </>
    );
}
export default ProfileView;

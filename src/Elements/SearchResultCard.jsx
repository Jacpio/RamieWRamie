import "../main.css"
import {CiLocationOn} from "react-icons/ci";
import {useNavigate} from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function SearchResultCard({title, description, tags = [], photo, className, city}) {
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate("/organisation")} className={className}>
            <div
                className="border-2 cursor-pointer flex w-full min-h-10 bg-white rounded-lg text-gray-600 shadow-md hover:shadow-xl translate-y-1 hover:translate-y-0 transition ">
                <img src={photo} className="object-cover object-center w-1/3 h-64 p-3" alt=""/>
                <div className="flex w-2/3 flex-col flex-grow">
                    <div className="w-full">
                        <h3 className="text-2xl font-semibold text-center my-2 text-primary-light">{title}</h3>
                        <p className="px-5 text-lg text-justify">{description}</p>
                        <p className="text-left flex items-center text-lg px-4 mt-2 text-gray-500"><CiLocationOn />{city}</p>
                    </div>
                    <div className="w-full flex h-full items-end justify-between px-5 pb-2 gap-3">
                        {tags.map((tag, i) => (
                            <span className="first-letter:uppercase text-lg font-semibold" key={i}>{tag}</span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}


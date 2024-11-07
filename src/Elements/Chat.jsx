import React, {useState} from 'react';
import {IoCloseOutline} from "react-icons/io5";
import {BsChatDotsFill} from "react-icons/bs";
import {motion} from 'framer-motion';
import {FiSend} from "react-icons/fi";

export default function Chat({className, name}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        isOpen ? (
            <motion.div
                initial={{width: "6rem", height: "6rem"}}
                animate={{width: "24rem", height: "32rem"}}
                className={className + " fixed rounded-xl shadow-sm right-5 bottom-5 bg-gray-100"}>
                <p className="bg-primary-dark rounded-t-lg p-2 text-white font-semibold flex justify-between">
                    <span>{name}</span>
                    <IoCloseOutline onClick={() => setIsOpen(false)} className="text-2xl font-semibold"/>
                </p>
                <div className="h-full">
                    <div className="flex flex-col h-5/6">
                        <div
                            className="bg-primary-dark text-white m-2 place-self-start p-2 rounded-t-lg rounded-r-lg">Siemaneczko!
                        </div>
                        <div className="place-self-end bg-white m-2 p-2 rounded-t-lg rounded-l-lg">Siemaneczko!</div>
                        <div
                            className="bg-primary-dark text-white m-2 place-self-start p-2 rounded-t-lg rounded-r-lg">Pierdol
                            sie!
                        </div>
                        <div className="place-self-end bg-white m-2 p-2 rounded-t-lg rounded-l-lg">Kocham PIS i Morawieckiego!</div>
                    </div>
                    <div className="h-1/6">
                        <div className="flex justify-between items-center">
                            <input type={"text"} className="p-1 mx-2 w-full bg-white rounded"/>
                            <FiSend className="text-primary-dark rounded-lg mx-2 bg-white p-1 h-8 w-8 aspect-square"/>
                        </div>
                    </div>
                </div>
            </motion.div>
        ) : (
            <div onClick={() => {
                setIsOpen(true);
            }}
                 className={`${className} text-5xl flex justify-center items-center text-primary-dark rounded-full  right-5 bottom-5 bg-white w-24 h-24 fixed`}>
                <BsChatDotsFill/>
            </div>
        )

    );
}
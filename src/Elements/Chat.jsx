import {useEffect, useState} from 'react';
import {IoCloseOutline} from "react-icons/io5";
import {BsChatDotsFill, BsSend} from "react-icons/bs";
import {motion} from 'framer-motion';
import {FiSend} from "react-icons/fi";
import {GrSend} from "react-icons/gr";
import {TbSend} from "react-icons/tb";
import {IoMdSend} from "react-icons/io";

export default function Chat({className, name, chat}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
                isOpen ? (
                    <motion.div
                        initial={{width: "6rem", height: "6rem"}}
                        animate={{width: "24rem", height: "32rem"}}
                        className={className + " fixed rounded-xl shadow-sm right-5 bottom-14 bg-gray-100"}>
                        <p className="bg-primary-dark rounded-t-lg p-2 text-white font-semibold flex justify-between">
                            <span>{name}</span>
                            <IoCloseOutline onClick={() => setIsOpen(false)} className="text-2xl font-semibold"/>
                        </p>
                        <div className="h-full">
                            <div className="flex flex-col h-5/6">
                                {/* eslint-disable-next-line react/prop-types */}
                                {chat.map((e, index) => (
                                    e.sender === "me" ? (
                                        <div key={index}
                                             className={`bg-white text-black m-2 place-self-end p-2 rounded-t-lg rounded-l-lg`}>
                                            {e.text}
                                        </div>
                                    ) : (
                                        <div key={index}
                                             className={`bg-primary-dark text-white m-2 place-self-start p-2 rounded-t-lg rounded-r-lg`}>
                                            {e.text}
                                        </div>
                                    )
                                ))}
                            </div>
                            <div className="h-1/6">
                                <div className="flex justify-between items-center">
                                    <input type={"text"} placeholder="Napisz wiadomość..."
                                           className="p-1 mx-1 ml-3 w-full bg-white rounded"/>
                                    <IoMdSend className="text-primary-dark rounded-lg mx-1 p-1 size-9 cursor-pointer aspect-square"/>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <div onClick={() => {
                        setIsOpen(true);
                    }}
                         className={`${className} text-5xl flex justify-center items-center text-primary-dark rounded-full  right-5 bottom-14 bg-white w-24 h-24 fixed`}>
                        <BsChatDotsFill/>
                    </div>
                )
    );
}
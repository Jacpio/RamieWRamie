import "../main.css";
import {CgProfile} from "react-icons/cg";
import React, {useRef} from "react";
import {BsSendFill, BsThreeDots} from "react-icons/bs";
import {useInView} from "framer-motion";

export default function CommentSection({comments}) {
    const ref = useRef(null);
    const isInView = useInView(ref,{once: true, margin: "-100px"});
    return (
        <>
            <h1 className="text-primary font-semibold text-3xl text-center mb-10">Sekcja komentarzy</h1>
            <div className="flex justify-center">
                <div className="w-full max-w-screen-xl flex justify-center mb-10">
                    <div className="w-full flex gap-x-10">
                        <input type="text" placeholder="Napisz swoją opinię...."
                               className="w-full px-2 min-h-8 ring-2 ring-primary-dark rounded"/>
                        <BsSendFill className="size-7 bg-primary text-white w-10 h-10 p-2 rounded"/>

                    </div>
                </div>
            </div>
            <div className="flex justify-center mb-20">
                <div className="flex w-full max-w-screen-xl flex-col gap-y-10 justify-center items-center">
                    {/* eslint-disable-next-line react/prop-types */}
                    {comments.map((comment, i) => (
                        <div ref={ref}   style={{
                            opacity: isInView ? 1 :0,
                            transform: isInView ? "none" : "translateY(100px)",
                            transitionDuration: (0.8 + i * 0.5 ).toPrecision(2)+ "s"
                        }} className="w-full">
                            <div className="w-full flex items-center justify-between">
                                <div className="w-full flex">
                                    <CgProfile className="size-6 mr-4 text-primary-dark"/>
                                    <span className="text-primary-dark font-semibold">{comment.display_name}</span>
                                    <time className="text-gray-500 ml-2">{comment.date}</time>
                                </div>
                                <BsThreeDots className="text-primary-dark size-4"/>
                            </div>
                            <div className="mt-1 px-10 w-full">
                                {comment.opinion}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}


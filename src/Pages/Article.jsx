import React, {useRef} from 'react';
import Navbar from '../elements/Navbar';
import {FaRegCommentAlt} from "react-icons/fa";
import {FaRegShareFromSquare} from "react-icons/fa6";
import {FaHashtag} from "react-icons/fa";
import Rating from "../Elements/Rating.jsx";
import {IoPersonCircleOutline} from "react-icons/io5";
import CommentSection from "../Elements/CommentSection.jsx";
import articleData from "../data/articleData.json";
import {motion, useInView} from "framer-motion";

export default function Article() {
    const ref = useRef(null);
    const isInView = useInView(ref,{once: true});
    return (
        articleData ? (
            <>
                <Navbar/>
                <div className="flex flex-col gap-6 flex-grow items-center justify-center py-12 px-6">
                    <div className="w-full max-w-4xl bg-white p-8 shadow-lg rounded-lg">
                        <div className="flex gap-7 justify-between mb-1">
                            <div className="flex items-center gap-2">
                                <FaHashtag className="text-primary"/>
                                <p>
                                    {articleData.tags.map((tag, index) => (
                                        <span key={index}>{tag}{index < articleData.tags.length - 1 ? ", " : ""}</span>
                                    ))}
                                </p>
                            </div>
                            <div className="flex items-center justify-center gap-x-2">
                                <p className="font-semibold text-primary">{articleData.author}</p>
                                <IoPersonCircleOutline className="mt-1 size-6 text-primary"/>
                            </div>

                        </div>
                        <p className="text-2xl mb-2">{articleData.title}</p>
                        <div className="flex gap-8 mb-5">
                            <div className="flex items-center">
                                <Rating count={articleData.rating}/>
                            </div>
                            <div className="flex gap-x-2 items-center">
                                <FaRegCommentAlt className="mt-1 "/>
                                {articleData.opinion.length}
                            </div>
                            <div className="flex gap-2 items-center cursor-pointer">
                                <FaRegShareFromSquare/>
                                Udostępnij
                            </div>

                        </div>
                        <div ref={ref}>
                            {articleData.content.map((e, index) => (
                                <motion.p key={index} className="text-justify mb-5" style={{
                                    opacity: isInView ? 1 : 0,
                                    transform: isInView ? "none" : "translateX(40px)",
                                    transitionDuration: (0.8 + index * 0.5).toPrecision(2) + "s"
                                }}
                                >
                                    {e}
                                </motion.p>
                            ))}
                        </div>

                    </div>
                    <div className="w-full max-w-4xl bg-white p-8 shadow-lg rounded-lg">
                        <CommentSection margin="50px" comments={articleData.opinion}/>
                    </div>
                </div>

            </>
        ) : (
            <>
                Ładowanie
            </>
        )
    )
}
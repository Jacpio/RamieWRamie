import "../main.css";
import React, {useEffect, useRef, useState} from "react";
import Rating from "./Rating.jsx";
import {CgProfile} from "react-icons/cg";
import {useInView} from "framer-motion";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";

export default function ArticleCard({image, rest, className, key}) {
    const ref = useRef(null);
    const isInView = useInView(ref,{once: true, margin: "-200px"});
    const navigate = useNavigate();
    return (
        <div onClick={()=> {
            navigate("/article");
        }} ref={ref}>
            <motion.div
                style={{
                    opacity: isInView ? 1 :0,
                    transform: isInView ? "none" : "translateY(-200px)",
                    transitionDuration: (0.8 + rest.id * 0.5 ).toPrecision(2)+ "s"
                }}
                key={key}

                className={` relative m-10 flex w-full max-w-md flex-col transition-[200s]  overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md ${className}`}>
                <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                    <img className="w-full object-cover object-center"
                         src={image}
                         alt="article image"/>
                </a>
                <div className="mt-4 px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl tracking-tight text-slate-900">{rest.title}</h5>
                    </a>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                        <p className="flex items-center">
                            <CgProfile className="size-6 text-primary-dark"/>
                            <span className="ml-3 text-sm font-medium text-slate-900">{rest.author}</span>
                        </p>
                        <div className="flex items-center">
                            <Rating count={rest.rate}/>
                            <span
                                className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{rest.rate.toPrecision(2)}</span>
                        </div>
                    </div>
                    <a href="#"
                       className="flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primay">
                        Zobacz realizacje!</a>
                </div>
            </motion.div>
        </div>
    )
}


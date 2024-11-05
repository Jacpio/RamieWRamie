import "../main.css";
import React, {useEffect, useState} from "react";
import {toNumber} from "lodash";
import {floor} from "lodash/math.js";
import {FaRegStarHalfStroke, FaStar} from "react-icons/fa6";


export default function Rating({count}) {
    const [rating, setRating] = useState([]);
    useEffect(() => {
        const number = toNumber(floor(count).toPrecision(1));
        const isHalfStar = count % number !== 0;
        const star = [];
        for (let i = 0; i < number; i++) {
            star.push(
                <FaStar className="text-yellow-300"/>
            );
        }
        if (isHalfStar) {
            star.push(<FaRegStarHalfStroke className="text-yellow-300" />)
        }
        setRating(star);
    },[0])
    return (
        <>
            {rating.map((rating, index) => (
                <span key={index}>{rating}</span>
            ))}
        </>
    )
}


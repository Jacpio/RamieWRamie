import React from 'react';
import Navbar from '../elements/Navbar';
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa";
import Rating from "../Elements/Rating.jsx";
import { IoPersonCircleOutline } from "react-icons/io5";
import CommentSection from "../Elements/CommentSection.jsx";
export default function Article () {
    const opinions = [{"display_name": "Bartosz Walaszczyk",
        "date": "05.11.2024r.",
        "opinion": "Super organizacja, supcio jest, UwU!!!!"},
        {"display_name": "Jakub Kłysiński",
            "date": "05.11.2024r.",
            "opinion": "Jestem gejem"},
        {"display_name": "Jacek Piotrowski",
            "date": "05.11.2024r.",
            "opinion": "Kłysiu stop"}]
    return (
        <>
          <Navbar />
            <div className="flex flex-col gap-6 flex-grow items-center justify-center py-12 px-6">
                <div className="w-full max-w-4xl bg-white p-8 shadow-lg rounded-lg">
                    <div className="flex gap-7 justify-between mb-1">
                        <div className="flex items-center gap-2">
                            <FaHashtag/>
                            <p>Żywność, Potrzebna pomoc, Wolontariat</p>
                        </div>
                        <div className="flex items-center gap-2">

                            <p>Jakub Kłysiński</p>
                            <IoPersonCircleOutline/>
                        </div>

                    </div>
                    <p className="text-2xl mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, nemo.</p>
                    <div className="flex gap-8 mb-5">
                    <div className="flex items-center">
                            <Rating count="5"/>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaRegCommentAlt/>
                            14
                        </div>
                        <div className="flex gap-2 items-center cursor-pointer">
                            <FaRegShareFromSquare/>
                            udostępnij
                        </div>

                    </div>
                    <p className="text-justify mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                        aliquam
                        assumenda consequatur deserunt dolores eaque ex excepturi harum impedit inventore iste
                        laboriosam, necessitatibus officiis optio quae quisquam repudiandae veniam. Accusamus, amet
                        atque beatae culpa deserunt dolorem doloribus esse explicabo fuga fugit inventore maiores
                        molestiae molestias mollitia nam nobis odit optio placeat porro quia ratione repellat
                        repudiandae sequi sint tempora temporibus totam voluptas voluptate voluptatem?</p>
                    <p className="text-justify mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
                        debitis, distinctio? Adipisci consectetur cumque ducimus ea esse facere incidunt laudantium odio
                        officiis pariatur porro, qui quo repellat ullam veritatis vero voluptas voluptatum?</p>
                    <p className="text-justify mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi facilis suscipit tempore
                        voluptatibus. Accusamus accusantium assumenda aut corporis distinctio, doloremque est explicabo
                        illo laboriosam molestiae nemo nesciunt nihil nulla obcaecati officia provident quam quia quos
                        recusandae reiciendis repellendus, sed veritatis! Ab assumenda eaque ex explicabo facere fugit
                        itaque laudantium magnam maiores mollitia nesciunt nostrum quae quaerat, quidem quo, suscipit
                        temporibus.
                    </p>
                </div>
                <div className="w-full max-w-4xl bg-white p-8 shadow-lg rounded-lg">
                        <CommentSection comments={opinions}/>

                </div>
            </div>

        </>
    )
}
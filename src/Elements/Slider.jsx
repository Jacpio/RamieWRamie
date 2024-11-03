import "../main.css";
import {useEffect, useRef, useState} from "react";
export default function Slider({img}) {

    const [imageSources, setImageSources] = useState([]);
    useEffect(() => {
        const loadImages = async () => {
            const sources = await Promise.all(
                img.map(async (image) => {
                    const src = await import(`../assets/${image.file_name}`);
                    return src.default;
                })
            );
            setImageSources(sources);
        };
        loadImages();
    }, [img]);
    return (
        <>
            {imageSources.map((src, i) => (
                <div className="max-w-screen-xl" key={i}>
                    <img src={src} alt={img[i].alt}/>
                </div>
            ))}
        </>
    )
}


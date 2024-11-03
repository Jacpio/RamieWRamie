import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageSources, setImageSources] = useState([]);
    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };


    useEffect(() => {
        const loadImages = async () => {
            const sources = await Promise.all(
                images.map(async (image) => {
                    const src = await import(`../assets/${image.file_name}`);
                    return src.default;
                })
            );
            setImageSources(sources);
        };
        loadImages();
    }, [imageSources]);

    return (
        <div className="relative w-full max-w-screen-2xl  mx-auto mt-10">
            <div className="h-64 md:h-96 flex items-center justify-center overflow-hidden">
                <img
                    src={imageSources[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className="w-full h-full object-cover rounded-lg transition duration-700 ease-in-out"
                />
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
                <button
                    onClick={goToPrevious}
                    className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
                >
                    &#10094;
                </button>
                <button
                    onClick={goToNext}
                    className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
                >
                    &#10095;
                </button>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
                {images.map((src, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
'use client';

import React from 'react';
import Slider from 'react-slick';
import '../../app/globals.css';

const Carousel = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <section className="py-12 md:py-5">
            <div className="container mx-auto">
                <div className="space-y-5">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <img
                                    src={image.src}
                                    width={400}
                                    height={300}
                                    alt={image.alt || `Web Page ${index + 1}`}
                                    className="rounded-md"
                                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            //className={`${className} custom-arrow next-arrow`}
            style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(128, 128, 128, 0.5)", borderRadius: "50%", width: "50px", height: "50px", zIndex: 1, position: "absolute", right: "-70px", top: "50%", transform: "translateY(-50%)" }}
            onClick={onClick}
        >
            <ArrowForward />
        </div>
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            //className={`${className} custom-arrow prev-arrow`}
            style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(128, 128, 128, 0.5)", borderRadius: "50%", width: "50px", height: "50px", zIndex: 1, position: "absolute", left: "-70px", top: "50%", transform: "translateY(-50%)" }}
            onClick={onClick}
        >
            <ArrowBack />
        </div>
    );
};

function ArrowBack() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
    );
}

function ArrowForward() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
    );
}

export default Carousel;

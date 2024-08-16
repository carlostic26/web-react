'use client';

import React from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import '../../app/globals.css';

const Carousel = () => {
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
        <section className="py-12 md:py-20">
            <div className="container mx-auto ">
                <div className="space-y-5">
                    <h2 className="text-2xl font-bold">Creación de páginas web</h2>
                    <Slider {...settings}>
                        <div>
                            <img
                                src="/placeholder.svg"
                                width={400}
                                height={300}
                                alt="Web Page 1"
                                className="rounded-md"
                                style={{ aspectRatio: "400/300", objectFit: "cover" }}
                            />
                        </div>
                        <div>
                            <img
                                src="/placeholder.svg"
                                width={400}
                                height={300}
                                alt="Web Page 2"
                                className="rounded-md"
                                style={{ aspectRatio: "400/300", objectFit: "cover" }}
                            />
                        </div>
                        <div>
                            <img
                                src="/placeholder.svg"
                                width={400}
                                height={300}
                                alt="Web Page 3"
                                className="rounded-md"
                                style={{ aspectRatio: "400/300", objectFit: "cover" }}
                            />
                        </div>
                        <div>
                            <img
                                src="/placeholder.svg"
                                width={400}
                                height={300}
                                alt="Web Page 4"
                                className="rounded-md"
                                style={{ aspectRatio: "400/300", objectFit: "cover" }}
                            />
                        </div>
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
            className={`${className} custom-arrow next-arrow`}
            style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", zIndex: 1 }}
            onClick={onClick}
        >
            <FaArrowRight className="text-2xl text-black-500 hover:text-gray-700" />
        </div>
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow prev-arrow`}
            style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", background: "transparent", zIndex: 1 }}
            onClick={onClick}
        >
            <FaArrowLeft className="text-2xl text-black-500 hover:text-gray-700" />
        </div>
    );
};


export default Carousel;

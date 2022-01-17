import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    return (
        <>
            <Carousel variant="dark" className='relative'>
                <Carousel.Item className="banner_item w-full">
                    <img
                        className="d-block w-screen h-screen"
                        src="https://i.ibb.co/RTMY5cF/portfolio1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="banner_description md:w-6/12">
                        <h2 className="text-5xl text-white">Full Stack</h2>
                        <h2 className="text-5xl text-white">Developre</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="banner_item w-full">
                    <img
                        className="d-block w-screen h-screen"
                        src="https://i.ibb.co/zmLcRvK/portfolio2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className="banner_description md:w-6/12">
                        <h2 className="text-5xl text-white">Mearn Stack</h2>
                        <h2 className="text-5xl text-white">Developer</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="banner_item w-full ">
                    <img
                        className="d-block w-screen h-screen"
                        src="https://i.ibb.co/Jktwg6V/portfolio3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className="banner_description md:w-6/12">
                        <h2 className="text-5xl text-white">Laravel</h2>
                        <h2 className="text-5xl text-white">Developer</h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <img className='absolute top-40 md:top-32 right-4 z-10 md:right-36' src="https://i.ibb.co/tbR5cjd/my-photo.png" alt="" />
        </>
    );
};

export default Banner;
"use client";

import React from 'react'
import Slider from 'react-slick';
import Slide from './Slide';

const Hero = () => {
  
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: "Home_Image1.jpg",
            title: "Trending Book",
            mainTitle: "Book sales",
            price: "$10",
        },

        {
            id: 1,
            img: "Home_Image2.jpg",
            title: "Trending Book",
            mainTitle: "Book sales",
            price: "$20",
        },

        {
            id: 2,
            img: "Home_Image3.jpg",
            title: "Trending Book",
            mainTitle: "Book sales",
            price: "$30",
        },

        {
            id: 3,
            img: "Home_Image4.jpg",
            title: "Trending Book",
            mainTitle: "Book sales",
            price: "$35",
        },
    ]



    return ( 
    <div>
        <div className='container pt-6 lg:pt-0'>
            <Slider {...settings}>
                {slideData.map((item) =>(
                    <Slide 
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        mainTitle={item.mainTitle}
                        price={item.price}
                    />
                ))}
            </Slider>
        </div>
    </div>
);
};

export default Hero;
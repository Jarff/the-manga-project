import React, { Component } from 'react';

import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class HomeSlider extends Component {
    render() {
        const settings = {
            arrows: false,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        };
        return (
            <div>
                <Slider {...settings} className="mb-12">
                    <a href="/">
                        <img src="./assets/images/slide1.png" className="rounded w-full" alt="a"></img>
                    </a>
                    <a href="/">
                        <img src="./assets/images/slide1.png" className="rounded w-full" alt="b"></img>
                    </a>
                    <a href="/">
                        <img src="./assets/images/slide1.png" className="rounded w-full" alt="c"></img>
                    </a>
                </Slider>
            </div>
        );
    }
}

export default HomeSlider;
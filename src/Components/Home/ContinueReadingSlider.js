import React, { Component } from 'react';


import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

class ContinueReadingSlider extends Component {
    render() {
        const settings = {
            arrows: true,
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4.5,
            slidesToScroll: 4,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 3,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };

        return (
            <div className="recommended px-6 mb-12">
                <h2 className="text-gray-300 mb-3">Continue Reading</h2>
                <Slider {...settings} className="mb-12">
                    <Link to="/manga" className="slick-custom-slide">
                        <img src="./assets/images/img1.jpg" alt="f" ></img>
                    </Link>
                    <Link to="/manga" className="slick-custom-slide">
                        <img src="./assets/images/img2.jpg" alt="s" ></img>
                    </Link>
                    <Link to="/manga" className="slick-custom-slide">
                        <img src="./assets/images/img3.jpg" alt="d" ></img>
                    </Link>
                    <Link to="/manga" className="slick-custom-slide">
                        <img src="./assets/images/img4.jpg" alt="a" ></img>
                    </Link>
                    <Link to="/manga" className="slick-custom-slide">
                        <img src="./assets/images/img4.jpg" alt="b" ></img>
                    </Link>
                    <Link to="/manga" className="slick-custom-slide">
                        <img src="./assets/images/img1.jpg" alt="f" ></img>
                    </Link>
                    <Link to="/manga" className="slick-custom-slide">
                        <img src="./assets/images/img2.jpg" alt="s" ></img>
                    </Link>
                    <Link to="/manga" className="slick-custom-slide">
                        <img src="./assets/images/img3.jpg" alt="d" ></img>
                    </Link>
                </Slider>
            </div>
        );
    }
}

export default ContinueReadingSlider;
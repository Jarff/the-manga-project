import React, { Component } from 'react';
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

class Tab extends Component {
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
            <div>
                <nav className="px-8 pt-2 shadow-md">
                    <div className="mb-10 flex">
                        <a className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-lg py-3 mr-8" href="#">
                            Suggested
                        </a>
                        <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-lg py-3 mr-8" href="#">
                            Details
                        </a>
                    </div>
                </nav>
                <div className="recommended px-6 mb-12">
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
                <div className="recommended px-6 mb-12 display-none">
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Tab;
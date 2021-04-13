import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Slider from "react-slick";
import {Link} from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Settings from '../Slick/settings';

class SectionSlider extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="recommended px-6 mb-12">
                <h2 className="text-gray-300 mb-3">{this.props.title}</h2>
                <Slider {...Settings} className="mb-12">
                    {this.props.slides.map(slide => {
                        console.log(slide);
                        return <Link to={'/manga/'+slide.slug} className="slick-custom-slide">
                            <img src={'http://localhost:1337'+slide.cover[0].url} alt="f" ></img>
                        </Link>
                    })}
                </Slider>
            </div>
        );
    }
}

SectionSlider.propTypes = {
    title: PropTypes.string,
    slides: PropTypes.array 
}

export default SectionSlider;
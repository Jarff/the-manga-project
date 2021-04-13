import React, { Component } from 'react';

import Sidebar from '../Components/Sidebar';
import HomeSlider from '../Components/Home/HomeSlider';
import RecommendedSlider from '../Components/Home/RecommendedSlider';
import ContinueReadingSlider from '../Components/Home/ContinueReadingSlider';
import SectionSlider from '../Components/Home/SectionSlider';
import MangaController from '../Controllers/MangaController';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            mangases: []
        }
    }
    
    componentDidMount(){
        MangaController.getMangasesSortedByCreationDate('DESC')
        .then(response => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    mangases: response
                }
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        const slides = [
            {cover: "./assets/images/img1.jpg"},   
            {cover: "./assets/images/img2.jpg"},   
            {cover: "./assets/images/img3.jpg"},   
            {cover: "./assets/images/img4.jpg"},   
            {cover: "./assets/images/img1.jpg"},   
        ]
        return (
            <div className="flex bg-gray-900 text-white min-h-screen">
                <div className="w-full">
                    <div className="container mx-auto">
                        <div className="my-8">
                            <HomeSlider></HomeSlider>
                            <div className="categories flex items-center mb-12">
                                <div className="w-1/5 px-4">
                                    <a href="/" className="bg-gray-800 h-32 flex justify-center items-center rounded-lg p-4 hover:bg-gray-900 border border-gray-700 shadow-custom">
                                        <span>Categoria 1</span>
                                    </a>
                                </div>
                                <div className="w-1/5 px-4">
                                    <a href="/" className="bg-gray-800 h-32 flex justify-center items-center rounded-lg p-4 hover:bg-gray-900 border border-gray-700 shadow-custom">
                                        <span>Categoria 2</span>
                                    </a>
                                </div>
                                <div className="w-1/5 px-4">
                                    <a href="/" className="bg-gray-800 h-32 flex justify-center items-center rounded-lg p-4 hover:bg-gray-900 border border-gray-700 shadow-custom">
                                        <span>Categoria 3</span>
                                    </a>
                                </div>
                                <div className="w-1/5 px-4">
                                    <a href="/" className="bg-gray-800 h-32 flex justify-center items-center rounded-lg p-4 hover:bg-gray-900 border border-gray-700 shadow-custom">
                                        <span>Categoria 4</span>
                                    </a>
                                </div>
                                <div className="w-1/5 px-4">
                                    <a href="/" className="bg-gray-800 h-32 flex justify-center items-center rounded-lg p-4 hover:bg-gray-900 border border-gray-700 shadow-custom">
                                        <span>Categoria 5</span>
                                    </a>
                                </div>
                            </div>
                            <SectionSlider title="Recently added" slides={this.state.mangases}></SectionSlider>
                            <SectionSlider title="Recommended for you" slides={slides}></SectionSlider>
                            <SectionSlider title="Continue Reading" slides={slides}></SectionSlider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
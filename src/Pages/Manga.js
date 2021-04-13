import React, { Component } from 'react';
import RecommendedSlider from '../Components/Home/RecommendedSlider';
import Tab from '../Components/Tab/Tab';
import MangaController from '../Controllers/MangaController';

class Manga extends Component {
    constructor(props){
        super(props);
        this.state = {
            manga: {
                name: "",
                cover: [
                    {url: ''}
                ]
            }
        }
    }

    componentDidMount(){
        MangaController.find(1)
        .then(response => {
            console.log(response);
            this.setState((prevState) =>{
                return {
                    ...prevState,
                    manga: response
                };
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
    render() {
        return (
            <div>
                <div className="min-h-screen bg-cover bg-center relative" style={{backgroundImage: `url(http://localhost:1337${this.state.manga.cover[0].url})`}}>
                    <div className="absolute z-10" style={{bottom:"10rem"}}>
                        <div className="pl-16 mb-4 pt-10">
                            <h1 className="mb-4 text-white">{this.state.manga.name}</h1>
                            <button className="px-6 py-2 bg-white text-black font-bold uppercase rounded flex items-center hover:bg-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                                <span className="pl-1">Read</span>
                            </button>
                        </div>
                        <div className="pl-16 text-white mb-8">
                            PG-13 &middot; 2019 &middot; 2h 4m &middot; Action, Adventure, Science, Fiction
                        </div>

                        <div className="w-96 xl:w-1/3 pl-16 leading-loose text-white">
                            {this.state.manga.summary}
                        </div>
                    </div>
                    <div className="absolute bg-black bg-opacity-50 w-full h-full"></div>
                    <div className="absolute bg-gradient-to-t from-gray-900" style={{bottom:0,height:"5rem",width:"100%"}}></div>
                </div>
                <div className="flex bg-gray-900 text-white">
                    <div className="w-full">
                        <div className="container mx-auto">
                            <div class="my-8">
                                <Tab></Tab>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Manga;
import React, { Component } from "react";
import Slider from "react-slick";
import images from "./images";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
		arrows:true,
      dots: true,
      infinite: true,
	  className:"center",
      speed: 500,
	  centerMode:true,
	  centerPadding:1,
	  autoplay:true,
	  infinite:true,
      slidesToShow: 3,
      slidesToScroll: 3
    };
	
    const settingsMd = {
		arrows:true,
      dots: true,
      infinite: true,
	  className:"center",
      speed: 500,
	  centerMode:true,
	  centerPadding:1,
	  autoplay:true,
	  infinite:true,
      slidesToShow: 1,
      slidesToScroll: 2
    };
    return (
		<hero>
			<div className="hidden py-2 lg:block">
        <div className="flex items-center justify-center">
		<div  className="py-6 bg-gradient-to-r from-purple-500 to-pink-500 w-1/2 rounded-lg flex items-center justify-center">
      <h1 className="text-yellow-100 hover:text-blue-800 cursor-pointer text-3xl font-bold"><i>GALLERY</i></h1>

    </div>
        </div>
    	
			<div className="w-full px-12  py-5">
        <Slider {...settings}>
          <div className="w-full px-2 h-auto">
            <img src={images.one} alt="" className="w-full rounded-md" />
          </div>
          <div className="w-full h-auto px-2">
		  <img src={images.two} alt="" className="w-full rounded-md" />
          </div>
          <div className="w-full h-auto px-2">
		  <img src={images.three} alt="" className="w-full rounded-md"/>
          </div>
          <div className="w-full h-auto px-2">
		  <img src={images.four} alt="" className="w-full rounded-md"/>
          </div>
          <div className="w-full h-auto px-2">
		  <img src={images.three} alt="" className="w-full rounded-md" />
          </div>
          <div className="w-full h-auto px-2">
		  <img src={images.two} alt="" className="w-full rounded-md"/>
          </div>
        </Slider>
      </div>
		</div>
		
		<div className="sm:hidden md:block lg:hidden">
			
			<div className="w-full px-12  py-8">
        <Slider {...settingsMd}>
          <div className="w-full px-2 h-auto">
            <img src={images.one} alt="" className="w-full h-auto" />
          </div>
          <div className="w-full h-auto px-2">
		  <img src={images.two} alt="" className="w-full h-auto" />
          </div>
          <div className="w-full h-auto px-2">
		  <img src={images.three} alt="" className="w-full h-auto"/>
          </div>
          <div className="w-full h-auto px-2">
		  <img src={images.four} alt="" className="w-full h-auto"/>
          </div>
          <div className="w-full h-auto px-2">
		  <img src={images.three} alt="" className="w-full h-auto" />
          </div>
          <div className="w-full h-auto px-2">
		  <img src={images.two} alt="" className="w-full h-auto"/>
          </div>
        </Slider>
      </div>
		</div>
		</hero>
    );
  }
}

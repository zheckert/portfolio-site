import React from "react"
import { BodyContent } from "./BodyContent"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import testImg from "./other/test-img.jpg"

 
export const Dev = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      };

      return (
        <Slider {...settings}>
          <div>
            <img className="imageTest" src={testImg} alt="This is just a test"/>
          </div>
          <div>
            <img className="imageTest" src={testImg} alt="This is just a test"/>
          </div>
          <div>
            <img className="imageTest" src={testImg} alt="This is just a test"/>
          </div>
          <div>
            <img className="imageTest" src={testImg} alt="This is just a test"/>
          </div>
          <div>
            <img className="imageTest" src={testImg} alt="This is just a test"/>
          </div>
          <div>
            <img className="imageTest" src={testImg} alt="This is just a test"/>
          </div>
        </Slider>
      )
}
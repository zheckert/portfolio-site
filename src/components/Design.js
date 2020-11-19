import React from "react"
import Slider from "react-slick";

export const Design = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
    return(
        <div>
        
        <Slider {...settings}>
          <div>
            image goes here!
          </div>
          <div>
            image goes here!
          </div>
          <div>
            image goes here!
          </div>
          <div>
            image goes here!
          </div>
          <div>
            image goes here!
          </div>
          <div>
            image goes here!
          </div>
        </Slider>
      </div>
    )
}

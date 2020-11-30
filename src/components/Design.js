//to fix: n is being a right bugger to work with. I just don't know anymore

import React from "react"
import Slider from "react-slick";
import  a  from "./images/design-images/a.jpg"
import  b  from "./images/design-images/b.jpg"
import  c  from "./images/design-images/c.jpg"
import  d  from "./images/design-images/d.jpg"
import  e  from "./images/design-images/e.jpg"
import  f  from "./images/design-images/f.jpg"
import  g  from "./images/design-images/g.jpg"
import  h  from "./images/design-images/h.jpg"
import  i  from "./images/design-images/i.jpg"
import  j  from "./images/design-images/j.jpg"
import  k  from "./images/design-images/k.jpg"
import  l  from "./images/design-images/l.jpg"
import  m  from "./images/design-images/m.jpg"
import  n  from "./images/design-images/n.jpg"
import  o  from "./images/design-images/o.jpg"
import  p  from "./images/design-images/p.jpg"
import  q  from "./images/design-images/q.jpg"

export const Design = () => {
    const settings = {
        focusOnSelect: true,
        dots: false,
        infinite: true,
        initialSlide: 1,
        centerMode: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
    
    return(
        <div >
        <Slider {...settings}>
          <div>
            <img className="design" src={a} alt="asdfasdfasdf"/>
          </div>
          <div>
            <img className="design" src={b} alt="asdfasdfasdf"/>
          </div>
          <div>
            <img className="design" src={c} alt="asdfasdfasdf"/>
          </div>
          <div>
            <img className="design" src={d} alt="asdfasdfasdf"/>
          </div>
          <div>
            <img className="design" src={e} alt="asdfasdfasdf"/>
          </div>
          <div>
            <img className="design" src={f} alt="asdfasdfasdf"/>
          </div>
          <div>
            <img className="design" src={g} alt="asdfasdfasdf"/>
          </div>
          <div>
            <img className="design" src={h} alt="asdfasdfasdf"/>
          </div>
          <div>
            <img className="design" src={i} alt="asdfasdfasdf"/>
          </div>
          <div>
            <img className="design" src={j} alt="asdfasdfasdf"/>
          </div>
          <div>
            <img className="design" src={k} alt="asdfasdfasdf"/>
          </div>
          <div>
            <img className="design" src={l} alt="asdfasdfasdf"/>
          </div>
          <div>
            <img className="design" src={m} alt="asdfasdfasdf"/>
          </div>
          <div>
            <img className="design" src={n} alt="asdfasdfasdf"/>
          </div>
          <div>
            <img className="design" src={o} alt="asdfasdfasdf"/>
          </div>
          <div>
            <img className="design" src={p} alt="asdfasdfasdf"/>
          </div>
          <div>
            <img className="design" src={q} alt="asdfasdfasdf"/>
          </div>
        </Slider>
      </div>
    )
}

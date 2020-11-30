//pass images in via prop

import React from "react"
import { Images } from "./Images"
import  { designData } from "./index"
// import  a  from "./images/design-images/a.jpg"
// import  b  from "./images/design-images/b.jpg"
// import  c  from "./images/design-images/c.jpg"
// import  d  from "./images/design-images/d.jpg"
// import  e  from "./images/design-images/e.jpg"
// import  f  from "./images/design-images/f.jpg"
// import  g  from "./images/design-images/g.jpg"
// import  h  from "./images/design-images/h.jpg"
// import  i  from "./images/design-images/i.jpg"
// import  j  from "./images/design-images/j.jpg"
// import  k  from "./images/design-images/k.jpg"
// import  l  from "./images/design-images/l.jpg"
// import  m  from "./images/design-images/m.jpg"
// import  n  from "./images/design-images/n.jpg"
// import  o  from "./images/design-images/o.jpg"
// import  p  from "./images/design-images/p.jpg"
// import  q  from "./images/design-images/q.jpg"

export const Design = () => {

    const designDisplay =  designData.map((design, i) => <Images src={design.src} alt={design.name} key={i}/>)

    return(
      <div>
        
          <div className="fullPage">
            <div>
              <div className="row">
                <div className="column">
                  <Images />
                </div>
                <div className="column">
                  <Images />
                </div>
                <div className="column">
                  <Images />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <Images />
              </div>
              <div className="column">
                <Images />
              </div>
              <div className="column">
                <Images />
              </div>
            </div>
          </div>
          {designDisplay}
        </div>
        
    )
}

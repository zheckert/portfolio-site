//pass images in via prop

import React from "react"
import { Images } from "./Images"
import  { designData } from "./index"

export const Design = () => {

    const designDisplay =  designData.map((design, i) => <Images src={design.src} alt={design.name} key={i}/>)
    //if key is 1, add row and column. If not, just column. If it's divisible by 3, add closing div tags?
    //first, get keys to work. argh

    return(
      <div className="grid">
        {designDisplay}
      </div>       
    )
}

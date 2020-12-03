import React from "react"
import { Images } from "./Images"
import  { designData } from "./index"

//note to self: I forgot to get alt-text working

export const Design = () => {

    const designDisplay =  designData.map((design, i) => <Images src={design.src} alt={design.name} key={i}/>)

    return(
      <div className="center">
        <div className="grid">
          {designDisplay}
        </div>   
      </div>
          
    )
}

import React from "react"
import { DevProjects } from "./DevProjects"
import  { devData } from "./index"

export const Dev = () => {
  //to render the icon in here? There may be less or more icons depending on the project.
  const devDisplay =  devData.map((dev, i) => 
  <DevProjects 
    key={i} 
    src={dev.src} 
    url={dev.url} 
    github={dev.github}
    alt={dev.name} 
    title={dev.title} 
    text={dev.text}
  />
  )

  return(
    <div className="center">
      <div className="devGrid">
        {devDisplay}
      </div>   
    </div>    
  )
}
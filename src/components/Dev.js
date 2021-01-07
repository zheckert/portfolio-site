import React from "react"
import { DevProjects } from "./DevProjects"
import  { devData } from "./index"

export const Dev = () => {

  const devDisplay =  devData.map((dev, i) => <DevProjects key={i} src={dev.src} alt={dev.name} title={dev.title} text={dev.text}/>)

  return(
    <div className="center">
      <div className="grid">
        {devDisplay}
      </div>   
    </div>    
  )
}
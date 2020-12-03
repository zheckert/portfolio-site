import React from "react"
import { VoiceoverProjects } from "./VoiceoverProjects"
import  { voiceoverData } from "./index"

export const Voiceover = () => {
  const voiceoverDisplay =  voiceoverData.map((design, i) => <VoiceoverProjects key={i}  src={design.src}/>)

  return(
    <div className="center">
      <div className="grid">
        {voiceoverDisplay}
      </div>   
    </div>
  )
}
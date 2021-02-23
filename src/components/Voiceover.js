import React from "react"
import { VoiceoverProjects } from "./VoiceoverProjects"

import  { voiceoverData } from "./index"

import commercial from "./audio/zach-heckert-commercial-demo.mp3"
import narrative from "./audio/zach-heckert-narrative-demo.mp3"

export const Voiceover = () => {
  const voiceoverDisplay =  voiceoverData.map((voiceover, i) => 
    <VoiceoverProjects 
      key={i}  
      src={voiceover.src} 
      title={voiceover.title} 
      width={voiceover.width} 
      height={voiceover.height} 
      frameborder={voiceover.frameborder} 
      allow={voiceover.allow} 
      allowfullscreen
    />
  )

  return(
    <>
    <div className="centerAltVo">
        <figure className="voPortfolioStyler">
          <figcaption>Commercial Demo Reel</figcaption>
              <audio
                controls
                src={commercial}
              >
              Your browser does not support the
              <code>audio</code> element.
            </audio>
        </figure>
        <figure className="voPortfolioStyler">
          <figcaption>Narrative Demo Reel</figcaption>
            <audio
              controls
              src={narrative}
            >
              Your browser does not support the
              <code>audio</code> element.
            </audio>
        </figure>
    </div>

    <div className="center">
      <div className="grid">
        {voiceoverDisplay}
      </div>   
    </div>
    </>
  )
}
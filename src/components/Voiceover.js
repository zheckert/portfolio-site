import React from "react"
import { VoiceoverProjects } from "./VoiceoverProjects"
import  { voiceoverData } from "./index"

export const Voiceover = () => {
  const voiceoverDisplay =  voiceoverData.map((voiceover, i) => <VoiceoverProjects key={i}  src={voiceover.src} title={voiceover.title} width={voiceover.width} height={voiceover.height} frameborder={voiceover.frameborder} allow={voiceover.allow} allowfullscreen/>)

  return(
    <div className="center">
      <div className="grid">
        {/* <div>
          <figure>
            <figcaption>Commercial Demo Reel</figcaption>
              <audio
                controls
                src="./audio/zach-heckert-commercial-demo.mp3">
                  Your browser does not support the
                  <code>audio</code> element.
              </audio>
          </figure>
          <figure>
            <figcaption>Narrative Demo Reel</figcaption>
              <audio
                controls
                src="./audio/zach-heckert-narrative-demo.mp3">
                  Your browser does not support the
                  <code>audio</code> element.
              </audio>
          </figure>
        </div> */}
        {voiceoverDisplay}
      </div>   
    </div>
  )
}
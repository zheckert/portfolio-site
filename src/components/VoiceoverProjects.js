import React from "react"

export const VoiceoverProjects = (props) => {
    return(
        <div className="centerAlt">
            <iframe src={props.src}/>
        </div>
    )
}
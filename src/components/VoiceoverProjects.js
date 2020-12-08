import React from "react"

export const VoiceoverProjects = (props) => {
    return(
        <div className="centerAlt">
            <iframe 
                src={props.src} 
                title={props.title}
                frameborder={props.frameborder} 
                allow={props.allow}
                allowfullscreen={props.allowfullscreen}
                width={props.width}
                height={props.height}
            />
        </div>
    )
}
import React from "react"

export const VoiceoverProjects = (props) => {
    return(
        <div className="centerAlt">
            <iframe 
                src={props.src} 
                title={props.title}
                frameBorder={props.frameborder} 
                allow={props.allow}
                allowFullScreen={props.allowFullScreen}
                width={props.width}
                height={props.height}
            />
        </div>
    )
}
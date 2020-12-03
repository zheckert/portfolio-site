import React from "react"

export const DevProjects = (props) => {
    return(
        <>
        <div>
            <img className="imageStyle" src={props.src} alt={props.alt}/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
        </>
    )
}
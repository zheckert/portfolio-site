import React from "react"

//https://url-shortener-zach.netlify.app/

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
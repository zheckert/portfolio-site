import React from "react"

export const DevProjects = (props) => {
    return(
        <>
        <div>
            <img className="imageStyle" src={props.src} alt={props.alt}/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <p>See the project <a href={props.url}>HERE</a></p>
        </div>
        {/* <div>
            icons
        </div> */}
        </>
    )
}
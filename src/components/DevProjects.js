    import React from "react"

export const DevProjects = (props) => {
    return(
        <>
            <div className="outer">
                <div className="border">
                    <div className="devProjectImageBox">
                        <a href={props.url} rel="noopener noreferrer" target="_blank"><img className="imageStyle" src={props.src} alt={props.alt}/></a>
                    </div>
                </div>
                <div className="center2">
                    <div className="center"><h3>{props.title}</h3></div>
                    <div className="center txt"><p>{props.text}</p></div>
                    <div className="center"><p>See the project on GitHub <a href={props.github} rel="noopener noreferrer" target="_blank">HERE</a></p></div>
                </div>
            </div>
        </>
    )
}
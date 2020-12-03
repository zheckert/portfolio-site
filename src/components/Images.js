import React from "react"

//dont forget to fix the alt here!!!

export const Images = (props) => {
    return(
        <div className="centerAlt">
            <img className="imageStyle" src={props.src} alt="This is just a test"/>
        </div>
    )
}
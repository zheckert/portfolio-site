import React from "react"

export const Images = (props) => {
    return(
        <div className="centerAltImage">
            <img className="imageStyle" src={props.src} alt={props.alt}/>
        </div>
    )
}
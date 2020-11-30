import React from "react"


export const Images = (props) => {
    return(
        <div className="bodyContentClass">
            <div>
                <img className="imageTest" src={props.src} alt="This is just a test"/>
            </div>
        </div>
    )
}
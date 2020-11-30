import React from "react"
import a from "./images/design-images/a.jpg"

export const Image = () => {
    return(
        <div className="bodyContentClass">
            <div>
                <img className="imageTest" src={a} alt="This is just a test"/>
            </div>
        </div>
    )
}
import React from "react"
import testImg from "./other/test-img.jpg"

export const Images = () => {
    return(
        <div className="bodyContentClass">
            <div>
                <img className="imageTest" src={testImg} alt="This is just a test"/>
            </div>
        </div>
    )
}
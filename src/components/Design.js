import React from "react"
import { Images } from "./Images"

export const Design = () => {
    return(
        <div className="fullPage">
            <div className="row">
                <div className="column">
                    <Images />
                </div>
                <div className="column">
                    <Images />
                </div>
                <div className="column">
                    <Images />
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <Images />
                </div>
                <div className="column">
                    <Images />
                </div>
                <div className="column">
                    <Images />
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <Images />
                </div>
                <div className="column">
                    <Images />
                </div>
                <div className="column">
                    <Images />
                </div>
            </div>
        </div>
    )
}
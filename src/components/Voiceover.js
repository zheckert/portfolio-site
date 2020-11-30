import React from "react"
import { Images } from "./Images"

export const Voiceover = () => {
    return(
        <div>
          <div className="fullPage">
            <div>
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
        </div>
    )
}
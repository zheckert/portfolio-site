import React from "react"
import { Images } from "./Images"
// import testImg from "./other/test-img.jpg"
//use maps to go through arrays of data? That way it's not hardcoded
 
export const Dev = () => {

      return (
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
            </div>
          </div>
      )
}
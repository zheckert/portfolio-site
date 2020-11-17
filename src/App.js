import React from "react"
import "./index.css"
import { Header, Footer, Dev, Voiceover, Design } from "./components/"
import { Switch, Route } from "react-router-dom"

export const App = () => {
    return(
        <>
        <div>
            <Header />
        </div>

        <Switch>
            <Route exact path="/">
                <Dev />
            </Route>
             <Route exact path="/voiceover">
                <Voiceover />
            </Route>
            <Route exact path="/design">
                <Design />
            </Route> 
        </Switch>

        <div>
            <Footer/>
        </div>
        </>
    )
}

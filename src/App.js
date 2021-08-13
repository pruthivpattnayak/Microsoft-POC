import React, {Component} from "react";
import "./App.css";
import Tiles from "./Tiles.js"

export default class App extends Component{
        
    render(){
        return(
            <div>
                <div className="background_display">
                    <div className="container">
                        <div className="welcome">WELCOME TO MICROSOFT Q&A</div>
                        <div className="question">What do you need help with today?</div>
                        <div className="det">Find it on Q&A - the home for technical questions and answers at Microsoft. New to Q7A? See our Get started article below</div>
                        <div className="inputContainer">
                            <input className="input" type="text" name="search" placeholder="Find posts, tags and users"></input>
                        </div>
                    </div>
                </div>
                <Tiles/>
            </div>

            
        )
    }
}




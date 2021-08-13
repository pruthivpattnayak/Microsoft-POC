import React, {Component} from "react";
import "./Tile.css";

export default class Tiles extends Component{
    render(){
        return(
            <div className="tileContainer">
                <div className="tileBox1">Get Started with Q&A</div>
                <div className="tileBox2">Top Microsoft Q&A features</div>
                <div className="tileBox3">Guidelines for writing a quality question</div>
                <div className="tileBox4">Write a quality answer</div>
            </div>
        )
    }
}
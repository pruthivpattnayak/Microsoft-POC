import React, { Component, useContext } from "react";
import { AppContext, SmallContext } from "../../App";

const Logger = () => {
    const context = useContext(AppContext);
    const smallvalue = useContext(SmallContext);
    console.log(`[context]`, context);
    console.log(`[smallvalue]`, smallvalue);
    return "logger";
};

export default class List extends Component {
    render() {
        console.log("this.props", this.props);
        return (
            <div>
                <Logger />
                <button onClick={this.props.inc}>INCR</button>
                <div>{this.props.count}</div>
                <button onClick={this.props.dec}>DECR</button>
                <button onClick={this.props.reset}>RESET</button>
            </div>
        );
    }
}

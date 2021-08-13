import React, {Component} from "react";
import "./Tile.css";

export default class Tiles extends Component{
    render(){
        return(
            <div>
                <div className="tileContainer">
                    <div className="box">Get Started with Q&A</div>
                    <div className="box">Top Microsoft Q&A features</div>
                    <div className="box">Guidelines for writing a quality question</div>
                    <div className="box">Write a quality answer</div>
                </div>
                <div className="parent">
                    <div className="supportConatiner">
                        <div  className="textContainer">Supported products</div>
                    </div>
                    <div className="supporttileContainer">
                        <div className="box">.NET
                            <p>Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more!</p>
                        </div>
                        <div className="box">Azure
                            <p>Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more!</p>
                        </div>
                        <div className="box">BizTalk Server
                            <p>Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more!</p>
                        </div>
                        <div className="box">C++
                            <p>Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more!</p>
                        </div>
                    </div>

                    <div className="supporttileContainer">
                        <div className="box">Enterprise Mobility + Security
                            <p>Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more!</p>
                        </div>
                        <div className="box">Microsoft 365
                            <p>Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more!</p>
                        </div>
                        <div className="box">Microsoft Advertising
                            <p>Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more!</p>
                        </div>
                        <div className="box">Microsoft Edge
                            <p>Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more!</p>
                        </div>
                    </div>

                    <div className="supporttileContainer">
                        <div className="box">Microsoft Robotics
                            <p>Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more!</p>
                        </div>
                        <div className="box">Open Specifications
                            <p>Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more!</p>
                        </div>
                        <div className="box">Power Query
                            <p>Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more!</p>
                        </div>
                        <div className="box">Small Basic
                            <p>Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more!</p>
                        </div>
                    </div>

                    <div className="supporttileContainer">
                        <div className="box">SQL Server
                            <p>Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more!</p>
                        </div>
                        <div className="box">System Center
                            <p>Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more!</p>
                        </div>
                        <div className="box">Visual Studio
                            <p>Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more!</p>
                        </div>
                        <div className="box">Windows
                            <p>Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more!</p>
                        </div>
                    </div>

                    <div className="supporttileContainer">
                        <div className="box-single">Windows Sysinternals
                            <p>Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more!</p>
                        </div> 
                    </div>
                </div>

                <div className="footer">
                    <div>English(United States)</div>                    
                </div>
                <div className="footer2">
                    <div>Previous Version Docs</div>
                    <div>Blog</div>                 
                    <div>Contribute</div> 
                    <div>Privacy & Cookie</div> 
                    <div>Microsoft 2021</div>
                </div>
            </div>

        )
    }
}
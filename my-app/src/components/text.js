import React from "react";
import './text.css';
class Text extends React.Component
{
    render(){
        return (
            <div className="text">
            <div className="heading">
                <h1>Create a beautiful website</h1>
            </div>
            <div className="para">
<p>Your CSS code looks mostly correct, but it can be improved for better
     consistency and functionality, especially 
     if you're looking to decrease the height of your navigation bar</p>
            </div>
            <button className="btn">Create</button>
            <div className="logos">
                <img src='logos.jpg'/>
            </div>
            </div>
        )
    }
}

export default Text
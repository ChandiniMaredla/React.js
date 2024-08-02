import React from "react";
import './home.css' 
import Image from "./image";
import Text from "./text";
import Pic from "./Pic";
import Footer from "./footer";
class Home extends React.Component
{
    render(){
        return (
            <div className="main">
               
            <div>   <nav className="nav">
                    <h3 className="h3c">Myapp</h3>
                    <ul className="list">
                        <li>About</li>
                        <li>Service</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                    <button className="btn">Log in</button>
                </nav>
            <h1 className="bg">Hello! Welecome to this page..<Image/></h1></div> 
            <div className="left"><Text/> <div className="img"><Pic/></div></div> 
           <div className="footer"><Footer/></div>
            </div>
        )
    }
}

export default Home;
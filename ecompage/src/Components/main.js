import react from "react";
import './main.css'
function Main(props){
   const {head,img,txt}=props;
    return(
        <div className="main">
            <div className="up">
                <div className="head"><h1>{head}</h1>
                <p>Live for Influential and Innovative fashion</p>
                <button className="btn">SHOP NOW</button>
                </div>
               <div className="imgdiv"><img className="img" src={img} alt={txt}/></div>
            </div>
        </div>
    )
}

export default Main
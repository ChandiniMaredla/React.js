import react from "react";
import './display.css'
function Display(props)
{
    const {img1,img2,img3,img4,img5,img6}=props;
    return (
        <div className="main3">
           {/* <div className="a1st">
            <img className="img4" src={img1}/>
            <img className="img4" src={img1}/>
            <img className="img4" src={img1}/>
           </div>

           <div className="a2nd">
           <img className="img4" src={img1}/>
           <img className="img4" src={img1}/>
           <img className="img4" src={img1}/>
           </div>

           <div className="a3rd">
           <img className="img4" src={img1}/>
           <img className="img4" src={img1}/>
           <img className="img4" src={img1}/>
           </div> */}
           <img className="bg" src={img1}></img>
        </div>
    )
}
export default Display
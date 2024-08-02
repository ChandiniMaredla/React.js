import react from "react";
import './images.css'
function Images(props)
{
    const {img1,img2,img3,img4,img5,img6}=props;
    return (
        <div className="nav">
            <ul className="ul1">
                <li><img className="img1" src={img1}/></li>
                <li><img className="img1" src={img2}/></li>
                <li><img className="img1" src={img3}/></li>
                <li><img className="img1" src={img4}/></li>
                <li><img className="img1" src={img5}/></li>
                <li><img className="img1" src={img6}/></li>
        
            </ul>
        </div>
    )
}
export default Images
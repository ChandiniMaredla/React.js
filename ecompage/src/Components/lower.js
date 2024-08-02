import react from "react";
import './lower.css'
function Base (props)
{
    const {pic1,pic2,pic3}=props;
    return(
        <div className="main2">
            <div><h2>NEW ARRIVALS</h2></div>
            <div className="allimages">
                <img className='img2' src={pic1}></img>
                <img className='img2' src={pic2}></img>
                <img className='img2' src={pic3}></img>
            </div>
        </div>
    )
}
export default Base
import { Component } from "react";
import react from "react";

function Props(props){
    return(
        <div>
            <h3>{props.head}</h3>
            <img src={props.img} alt={props.txt}/>
        </div>
    )
}

export default Props
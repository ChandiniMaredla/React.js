import { setTestabilityGetter } from "@angular/core";
import react,{useState} from "react";
import {Component} from "react";

function Onclick(){
    const [count,setCount]=useState(0);

    return (
        <div><h3>{count}</h3>
        <button onClick={()=>setCount(count+1)}>Click</button></div>
    )
}

export default Onclick
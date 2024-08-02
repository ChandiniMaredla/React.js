import React,{useState} from "react";
function Inputfun(){
    const [name,setName]=useState("")

    return (
        <div>
            Name:<h1>{name}</h1>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </div>
    )
}

export default Inputfun
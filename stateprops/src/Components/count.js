import React,{useState,Component} from 'react';

function Count(props){
    const [count,setCount]=useState(0)
    const {val}=props;
    return(
        <div>
<h1>Count: {count}</h1>
<button onClick={()=>{setCount(count+1)
    console.log({count})
}}>Increment</button>
<button onClick={()=>setCount(count-1)}>{val}</button>
</div>
    )
}
export default Count

import React,{Component,useState} from 'react';
function Islogged()
{
    const [islog,setIslog]=useState(true)
    if(islog)
    return <h1>Login success</h1>
    else 
    return <h1>Login failed</h1>
} 
export default Islogged
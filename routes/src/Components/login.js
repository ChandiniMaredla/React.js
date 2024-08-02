import React from 'react'
import {useState} from 'react'
function Login(){
    const [user,setUser]=useState("")
    const [pass,setPass]=useState("")
    const [userfield,setUserfield]=useState(false)
    const [passfield,setPassfield]=useState(false)
    const [show,setShow]=useState("")

    const handleUserChange=(e)=>{
        setUser(e.target.value);
        setUserfield(true)
    }


    const handlePasswdChange=(e)=>{
        setPass(e.target.value);
        setPassfield(true)
            }

            const handleClick=()=>{
                if(userfield === "" || passfield === "")
                    {
                        setShow(false)
                    }
                    else{
                        setShow(true)
                    }
                    setUser("")
                    setPass("")
                    setUserfield(false)
                    setPassfield(false)
            }

    return(
       <div>
        Username:<input type="text" value={user} onChange={handleUserChange}/>
        Password: <input type="password" value={pass} onChange={handlePasswdChange}/>
        <button onClick={handleClick}>Login</button>
      {(show) &&<h1>Login successful</h1>}
        </div>
        
       
    )
}
export default Login
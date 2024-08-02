import axios from "axios";
import { comma } from "postcss/lib/list";
import React, { useState } from "react";

function Login({ setIsShow }) {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const handleClick = () => {
    if (uname && pass) {
      setIsShow(false);
      axios.post("",{
        
      })
      setUname = "";
      setPass = "";
    } else setIsShow = true;
    console.log({ setIsShow });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <h1 className="text-2xl mb-4">LOGIN PAGE</h1>
      <form className="w-3/3 bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            onChange={(e) => setUname(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          onClick={handleClick}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default Login;

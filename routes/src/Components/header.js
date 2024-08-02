import React from 'react'
import Home from './home';
import About from './about';
import Contact from './contact';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Login from './login';
function Header(){
    return (
        <div className="nav">
             <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/login" element={<Login/>}/>
    </Routes>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
    <Link to='/login'>Login</Link>
   </BrowserRouter>
        </div>
    )
}

export default Header
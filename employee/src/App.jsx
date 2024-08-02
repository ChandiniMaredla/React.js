// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import Sidebar from "./assets/Components/Sidebar";
// import Header from "./assets/Components/Header";
// import Footer from "./assets/Components/Footer";
// import Body from "./assets/Components/Body";
// import Contact from "./assets/Components/Contact";
// import Home from "./assets/Components/Home";
// import Login from "./assets/Components/Login";
// import About from "./assets/Components/About";
// import EmpProDet from "./assets/Components/EmpProDet";
// import Employee from "./assets/Components/Employee";
// import Project from "./assets/Components/Project";
// import Task from "./assets/Components/Task";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   const [isShow, setIsShow] = useState(true);
//   const [allshow,setAllshow]=useState(true);

//   const handleLogout = () => {
//     setAllshow(false);
//     setIsShow(true);
//   };


//   if (isShow)
//     return (
//       <div>
//         <Login setIsShow={setIsShow} />
//       </div>
//     );

// if(!allshow)
//   return (
//     <div>
//       <Login setIsShow={setIsShow} />
//     </div>
//   )

//     return (
//       <div className="flex-col">
//         <BrowserRouter>
//           <div className="h-20 bg-sky-400">
//             <Header setAllshow={setAllshow} setIsShow={setIsShow}/>
//           </div>
//           <div className="flex">
//             <Sidebar />
//             <div className="flex-1 overflow-auto">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/employee" element={<Employee />} />
//               <Route path="/empprodet" element={<EmpProDet />} />
//               <Route path="/project" element={<Project />} />
//               <Route path="/task" element={<Task />} />
//             </Routes>
//             </div>
//           </div>
//           <div className="mt-100 h-12 w-full bg-slate-900">
//             <Footer />
//           </div>
//         </BrowserRouter>
//       </div>
//     );
// }

// export default App;


import { useState } from "react";
import "./App.css";
import Sidebar from "./assets/Components/Sidebar";
import Header from "./assets/Components/Header";
import Footer from "./assets/Components/Footer";
import Contact from "./assets/Components/Contact";
import Home from "./assets/Components/Home";
import Login from "./assets/Components/Login";
import About from "./assets/Components/About";
import EmpProDet from "./assets/Components/EmpProDet";
import Employee from "./assets/Components/Employee";
import Project from "./assets/Components/Project";
import Task from "./assets/Components/Task";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isShow, setIsShow] = useState(true);
  const [allshow, setAllshow] = useState(true);

  if (isShow) {
    return (
      <div>
        <Login setIsShow={setIsShow} />
      </div>
    );
  }

  if (!allshow) {
    return (
      <div>
        <Login setIsShow={setIsShow} />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <div className="h-20 bg-sky-400">
          <Header setAllshow={setAllshow} setIsShow={setIsShow} />
        </div>
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <div className="flex-1 overflow-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/employee" element={<Employee />} />
              <Route path="/empprodet" element={<EmpProDet />} />
              <Route path="/project" element={<Project />} />
              <Route path="/task" element={<Task />} />
            </Routes>
          </div>
        </div>
        <div className="h-12 w-full bg-slate-900">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

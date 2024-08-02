// import logo from "./logo.svg";
// import "./App.css";
// import Header from "./Components/header";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { response } from "express";
// function App() {
//   const [data, setData] = useState([]);
//   const [value, setValue] = useState([]);
//   useEffect(() => {
//     axios
//       .get("http://localhost:3007")
//       .then((response) => setData(response.data));
//   }, []);

//   useEffect(() => {
//     axios
//       .post("http://localhost:4003", { id: 1001, name: 'chandu' })
//       .then((response) => {
//         console.log("POST response:", response.data);
//         setValue(response.data); // Store POST response in state
//       })
//     })


//   return (
//     <div className="App">
//       {data.map((student) => (
//         <li>
//           {student.id}-{student.name}
//         </li>
//       ))}
//     </div>
//   );
// }

// export default App;


import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState({});

  // Fetch data from GET request on component mount
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3007")
  //     .then((response) => setData(response.data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []); // Empty dependency array ensures this effect runs only once on mount

  // Simulate POST request on component mount
  // (error) => console.error("Error posting data:", error));
  // }, []); 
  
  // Empty dependency array ensures this effect runs only once on mount

  // return (
  //   <div className="App">
  //     {/* Display GET request data */}
  //     <h2>Data from GET request:</h2>
  //     <ul>
  //       {data.map((student) => (
  //         <li key={student.id}>
  //           {student.id} - {student.name}
  //         </li>
  //       ))}
  //     </ul>

      {/* Display POST request data */}
      // <h2>Data from POST request:</h2>
      // <p>
      //   ID: {value.id}, Name: {value.name}
      // </p>
  //   </div>
  // );


  useEffect(()=>{
axios.delete("http://localhost:4008/?name=srikanthchebrolu").then((response)=>{setData(response.data)
console.log(response.status)
  })
  },[])

  return(
  <div>
     <div className="App">
      {console.log(data.name)}
      name: {data.name}
     </div>
  </div>
  )
}

export default App;

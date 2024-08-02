import React, { useState } from "react";
import axios from "axios";
function Project() {
  const [data, setData] = useState([]);
  const [pid, setPid] = useState("");
  const handleClick = () => {
    axios
      .get(`http://localhost:3008/project/${pid}`)
      .then((response) => setData(response.data));
    setPid("");
    console.log({data})
  };
  return (
    <div>
      <h1>project details</h1>
      Enter project ID:
      <input
        className="border border-2 border-zinc-500-950"
        type="text"
        onChange={(e) => {
          setPid(e.target.value);
        }}
      />
      <button
        className="bg-sky-400 h-9 w-24 font-semibold"
        onClick={handleClick}
      >
        GET
      </button>
      <div>
        <ul>
        {data.map((Project)=>(
            <li key="Project.pid">{Project.pid} {Project.pname} {Project.client}</li>
        ))}
        </ul>
      </div>
    </div>
  );
}
export default Project;



// import React, { useState } from "react";
// import axios from "axios";

// function Project() {
//   const [data, setData] = useState([]);
//   const [pid, setPid] = useState("");

//   const handleClick = () => {
//     axios
//       .get(`http://localhost:3008/project/${pid}`)
//       .then((response) => {
//         setData(response.data);
//         setPid(""); // Clear the input field only after getting the response
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the data!", error);
//       });
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <h1 className="text-2xl mb-4">Project Details</h1>
//       <div className="mb-4">
//         <label className="block mb-2">Enter project ID:</label>
//         <input
//           className="border border-2 border-zinc-500 p-2"
//           type="text"
//           value={pid}
//           onChange={(e) => {
//             setPid(e.target.value);
//           }}
//         />
//       </div>
//       <button
//         className="bg-sky-400 h-9 w-24 font-semibold mb-4"
//         onClick={handleClick}
//       >
//         GET
//       </button>
//       <div>
//         <ul>
//           {data.map((project) => (
//             <li key={project.pid}>
//               {project.pid} {project.pname} {project.client}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Project;

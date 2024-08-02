import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function Employee() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3007/")
      .then((response) => setData(response.data));
  }, []);
  return (
    <div>
      <h1>employee details</h1>
      {console.log({ data })}

      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LaststName</th>
            <th>PhoneNo</th>
            <th>workmail</th>
            <th>gmail</th>
          </tr>
          {data.map((Employee) => (
            <tr key={Employee.id}>
              <td> {Employee.id}</td>
              <td>{Employee.fname}</td>
              <td>{Employee.lname}</td>
              <td> {Employee.phno}</td>
              <td>{Employee.workmail}</td>
              <td>{Employee.gmail}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
export default Employee;

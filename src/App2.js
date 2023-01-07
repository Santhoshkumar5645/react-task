import React, {useState} from "react";

import './App.css';

function App() {

  const [data, setData] = useState([{
    description:"",
    tags:""
  }]);

  const currentTime = new Date().toLocaleDateString();

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <td>Documents</td>
            <td>Description</td>
            <td>Tags</td>
            <td>Last Review Date</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
       
          <tr>
            <td><input type="file" /></td>
            {data.map((values)=>{

            <>
            <td>{values.description}</td>
            <td>{values.tags}</td>
            </>
            
          })}
            <td>{currentTime}</td>
          </tr>
       
         
        </tbody>
      </table>

      <h2>Add New Data</h2>
      <form >
        <input type="file" required="required" name="file" />
        <input type="text" required="required" name="description" placeholder='Add description' />
        <input type="text" required="required" name="description" placeholder='Add tags' />
        <input value={currentTime} />
        <button>Add</button>
      </form>

      </div>
  );
}

export default App;

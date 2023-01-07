import React, { useState } from 'react';
import "./App.css";


const App = () => {

    const [file, setFile] = useState([]);
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const date = new Date().toLocaleDateString();

    const [showData, setShowData] = useState([]);
   
  function handleEdit(event){

    event.preventDefault();
           
    const name= event.target.getAttribute("name")
    const value= event.target.value;

    const newFormData = {...showData}
    newFormData [name] = value;

    console.log(newFormData)

    
  }

  function buttonClick(event){
  
    event.preventDefault();
    if(file && description && tags && date){
      
      const newData= {file,description,tags,date}
      setShowData([...showData, newData]);
      setFile("");
      setDescription("");
      setTags("");
     
      
    }
     else{
      alert("Please fill all the fields")
     }
      
  }
  return (
    <div >
       <form>
        <div>
           
            <input type="file" name= "file"  multiple className="w-50 my-3  py-1" onChange= {(event) => setFile(event.target.value)} value={file} />
        </div>
        <div>
           
            <input type="text" name="description" placeholder= "Add Description" className="w-50 my-3 py-1" onChange={(event) => setDescription(event.target.value)}  value={description} />
        </div>
        <div>
           
            <input placeholder= "Add tags" name="tags" multiple className="w-50 my-3  py-1" onChange= {(event) => setTags(event.target.value)} value={tags} />
        </div>
        <div>
           
            <input name="date" className="w-50 my-3  py-1"  value={date} />
        </div>
       
       <button onClick={buttonClick} className="btn btn-dark" type="submit">Submit</button>
       </form>

       <div className="my-4">
           
              <table>
                <thead>
                  <tr>
                    <th>Documents</th>
                    <th>Description</th>
                    <th>Tags</th>
                    <th>Last Review Date</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                {showData.map((values) =>{
            return(

                  <tr>
                    <td>{values.file}</td>
                    <td>{values.description}</td>
                    <td>{values.tags}</td>
                    <td>{date}</td>
                    <td><button onClick={handleEdit}>Edit</button></td>
                  </tr>
                   
            )
                })}
                </tbody>
              </table>
               
       </div>
      
    </div>
  )
}

export default App;

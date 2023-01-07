import React, {useState} from 'react'

function App() {

    const[id, setId] = useState("");
    const[file, setFile]= useState("");
    const[description, setDescription] = useState("");
    const[tags, setTags] = useState("");
    const[date, setDate] = useState("");
  
     const currentTime = new Date().toLocaleDateString();
    const[data, setData]= useState([
        {
           id:1,
           file: <input type="file" />,
           description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nisi?",
           tags: <div></div>,
           date: currentTime
       }])


        const handleAdd =() =>{
            setData([...data, {id:id, file: file, description: description}]);
        }

  return (
   <div className="App">
    <h1>React CRUD Application</h1>

    <input type="text" value={id} onChange={(event)=>{
        setId(event.target.value)
    }} />

    <input type="file" value={file} onChange={(event)=>{
         setFile(event.target.value);
    }} />
   

    <input type="text" placeholder='Enter description' value={description} onChange={(event)=>{
        setDescription(event.target.value)
    }} />

    <input type="text" value={tags} onChange={(event)=>{
        setTags(event.target.value)
    }} />
   
    <input value={currentTime} />

    <button onClick={handleAdd} >Add</button>
    <button>Delete All</button>

    <br />

    {data.map((event)=>{
        <div>
            {event.id}
            {event.file}
            {event.description}
            {event.tags}
            {event.currentTime}
        </div>
    })}
   </div>
  )
}

export default App;

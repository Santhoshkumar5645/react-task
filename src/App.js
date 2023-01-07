import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [file, setFile] = useState([]);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const date = new Date().toLocaleDateString();

  const [showData, setShowData] = useState([]);

  function handleEdit(event) {
    event.preventDefault();

    const name = event.target.getAttribute("name");
    const value = event.target.value;

    const newFormData = { ...showData };
    newFormData[name] = value;

    console.log(newFormData);
  }

  function buttonClick(event) {
    event.preventDefault();
    if (file && description && tags && date) {
      const newData = { file, description, tags, date };
      setShowData([...showData, newData]);
      setFile("");
      setDescription("");
      setTags("");
    } else {
      alert("Please fill all the fields");
    }
  }
  return (
    <div>
      <form>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6 col-lg-4">
              <div>
                <input
                  type="file"
                  name="file"
                  multiple
                  className="w-50 my-3  py-1"
                  onChange={(event) => setFile(event.target.value)}
                  value={file}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="description"
                  placeholder="Add Description"
                  className="w-50 my-3 py-1"
                  onChange={(event) => setDescription(event.target.value)}
                  value={description}
                />
              </div>
              <div>
                <input
                  placeholder="Add tags"
                  name="tags"
                  multiple
                  className="w-50 my-3  py-1"
                  onChange={(event) => setTags(event.target.value)}
                  value={tags}
                />
              </div>
              <div>
                <input name="date" className="w-50 my-3  py-1" value={date} />
              </div>
            </div>
          </div>
        </div>
        <button onClick={buttonClick} style={{width: "300px",
                                              position:"relative",
                                              left: "100px"
                                                          
        }} className="btn btn-dark" type="submit">
          Submit
        </button>
      </form>

      <div className="container-fluid my-4 pr-2">
        <table>
          <thead>
            <tr>
              <th className="col-4">Documents</th>
              <th className="col-4">Description</th>
              <th className="col-2">Tags</th>
              <th className="col-1" style={{ fontSize: "0.6rem" }}>
                Last Review Date
              </th>
              <th className="col-1">Action</th>
            </tr>
          </thead>
        </table>
        <div>
          {showData.map((values) => {
            return (
              <div className="data">
                <div className="file col-4">
                  <i class="fa-solid fa-file-lines fa-4x file_icon"></i>
                  <p className="tag">{values.file}</p>
                </div>
                <div className="description col-4">
                  <p className="para">{values.description}</p>
                </div>
                <div className="tags col-2">
                  <p className="tag">
                    <i class="fa-solid fa-tags tag_icon"></i>
                    {values.tags}
                  </p>
                </div>
                <div className="date col-1">{date}</div>
                <div className="edit col-xs-1">
                  <input
                    type="button"
                    value="Edit"
                    onChange={handleEdit}
                    className="edit_text"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

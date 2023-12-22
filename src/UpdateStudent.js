import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateStudent() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [course, setCourse] = useState("");
  const [level, setLevel] = useState(0);
  const {id} = useParams();
  const navigate = useNavigate();

  async function saveData(event) {
    event.preventDefault();

    try {
      if (!firstname || !lastname || !course || !level) {
        alert("All fields are required");
        return;
      }

      const response = await axios.put('http://localhost:8081/update/'+id, { firstname, lastname, course, level });

      console.log(response);
      navigate("/");
    } catch (error) {
      console.error("Error saving data:", error);
      alert("An error occurred while saving data");
    }
  }

  return (
    <div>
      <form onSubmit={saveData}>
        <h1>Update Student</h1>
        <label>FIRSTNAME</label>
        <input type="text" name="firstname"  onChange={(e) => setFirstname(e.target.value)} />
        
        <label>LASTNAME</label>
        <input type="text" name="lastname"   onChange={(e) => setLastname(e.target.value)} />
        
        <label>COURSE</label>
        <input type="text" name="course"  onChange={(e) => setCourse(e.target.value)} />
        
        <label>LEVEL</label>
        <input type="number" name="level"  onChange={(e) => setLevel(e.target.value)} />
        
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateStudent;

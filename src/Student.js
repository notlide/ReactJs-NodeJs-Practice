import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Student(){
  const [student, setStudent] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:8081/')
    .then(res => setStudent(res.data));
  }, [])

  return(<div> 
    <Link to="/create">Create Student</Link>
    <table>
      <thead>
        <tr>
          <th>FIRSTNAME</th>
          <th>LASTNAME</th>
          <th>COURSE</th>
          <th>LEVEL</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
         {
          student.map((data)=>(
            <tr>
              <td>{data.firstname}</td>
              <td>{data.lastname}</td>
              <td>{data.course}</td>
              <td>{data.level}</td>
              <td>
                <Link to={`update/${data.id}`}>Update</Link>
                <Link to="/delete">Delete</Link>
              </td>
            </tr>
          ))
         }
      </tbody>
    </table>
  </div>
  )
}

export default Student
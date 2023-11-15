import React, { useState } from 'react';
import './DeleteStudentComponent.css';
import axios from 'axios';

const DeleteStudentComponent = () => {
  const [studentID, setstudentID] = useState('')
  const [studentInfo, setStudentInfo] = useState({
    studentName: '',
    studentEmail: '',
    dateOfBirth: '',
  });

  const studentIDHandler = (event) => {
    setstudentID(event.target.value)
    
  };



  const studentIDValidator = (event) => {
    event.preventDefault()
    axios
      .get(`http://localhost:8082/api/v1/student/${studentID}`)
      .then(response => setStudentInfo(response.data))
      .catch(error => {
        alert(`Status ${error.response.data.status} - ${error.response.data.message}`)
      })
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    axios
      .delete(`http://localhost:8082/api/v1/student/${studentID}`)
      .then(response => {
        if (response.status == 200)
        {
          alert(`Data of ${studentInfo.studentName} is deleted successfully`)
          window.location.href="/"
        }
      })
      .catch(error => {
        alert(`Status ${error.response.data.status} - ${error.response.data.message}`)
      })
  };

  const { studentName, studentEmail, dateOfBirth } = studentInfo;

  return (
    <form className="form-container" onSubmit={formSubmitHandler}>
      <h2>Deleting Employee</h2>

      <div className="form-group">
        <label>Student ID</label>
        <input
          type="text"
          placeholder="Give the Employee ID"
          value={studentID}
          onChange={studentIDHandler}
          required
        />
      </div>
      <div>
        <button onClick={studentIDValidator}>Check</button>
      </div>

      <div className="form-group">
        <label>Student Name</label>
        <input
          type="text"
          placeholder="Enter the employee name"
          value={studentName}
          readOnly
        />
      </div>

      <div className="form-group">
        <label>Student Email</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter the employee email"
          value={studentEmail}
          readOnly
        />
      </div>

      <div className="form-group">
        <label>Date of Birth</label>
        <input
          type="date"
          value={dateOfBirth}
          readOnly
        />
      </div>

      <div>
        <button type="submit">Delete</button>
      </div>
    </form>
  );
};

export default DeleteStudentComponent;

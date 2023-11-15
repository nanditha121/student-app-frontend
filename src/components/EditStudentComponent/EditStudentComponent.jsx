import React, { useState } from 'react';
import './EditStudentComponent.css';
import axios from 'axios';

const EditStudentComponent = () => {
  const [studentID, setStudentID] = useState('')
  const [studentInfo, setStudentInfo] = useState({
    studentName: '',
    studentEmail: '',
    dateOfBirth: '',
  });

  const studentNameHandler = (event) => {
    setStudentInfo({
      ...studentInfo,
      studentName: event.target.value
    });
  };

  const studentEmailHandler = (event) => {
    setStudentInfo({
      ...studentInfo,
      studentEmail: event.target.value
    });
  };

  const studentIDHandler = (event) => {
    setStudentID(event.target.value)
  };

  const dateOfBirthHandler = (event) => {
    setStudentInfo({
      ...studentInfo,
      dateOfBirth: event.target.value
    });
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
      .put(`http://localhost:8082/api/v1/student/${studentID}`, studentInfo)
      .then(response => {
        if (response.status == 200)
        {
          alert(`Data of ${studentInfo.studentName} is updated successfully`)
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
      <h2>Updating Student</h2>

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
          onChange={studentNameHandler}
          required
        />
      </div>

      <div className="form-group">
        <label>Student Email</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter the employee email"
          value={studentEmail}
          onChange={studentEmailHandler}
          required
        />
      </div>

      <div className="form-group">
        <label>Date of Birth</label>
        <input
          type="date"
          value={dateOfBirth}
          onChange={dateOfBirthHandler}
          required
        />
      </div>

      <div>
        <button type="submit">Update</button>
      </div>
    </form>
  );
};

export default EditStudentComponent;

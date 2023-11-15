import React, { useState } from 'react';
import './AddNewStudentComponent.css';
import axios from 'axios';

const AddNewStudentComponent = () => {
  const [studentInfo, setStudentInfo] = useState({
    studentName: '',
    studentEmail: '',
    dateOfBirth: '',
  });

  const studentNameHandler = (event) => {
    setStudentInfo({
      ...studentInfo,
      studentName: event.target.value,
    });
  };

  const studentEmailHandler = (event) => {
    setStudentInfo({
      ...studentInfo,
      studentEmail: event.target.value,
    });
  };


  const dateOfBirthHandler = (event) => {
    setStudentInfo({
      ...studentInfo,
      dateOfBirth: event.target.value,
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:8082/api/v1/student/`,studentInfo)
      .then(response => {
        if (response.status == 200)
        {
          alert(`Data of ${studentInfo.studentName} is added successfully`)
          window.location.href='/'
        }
      })
      .catch(error => {
        alert(`Status ${error.response.data.status} - ${error.response.data.message}`)
      })
  };

  const { studentName, studentEmail, dateOfBirth } = studentInfo;

  return (
    <form className='form-container' onSubmit={formSubmitHandler}>
      <h2>Adding a new student</h2>

      <div className='form-group'>
        <label>Student Name</label>
        <input
          type='text'
          placeholder='Enter the student name'
          value={studentName}
          onChange={studentNameHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Student Email</label>
        <input
          type='text'
          className='form-control'
          placeholder='Enter the student email'
          value={studentEmail}
          onChange={studentEmailHandler}
          required
        />
      </div>

      <div className='form-group'>
        <label>Date Of Birth</label>
        <input
          type='date'
          value={dateOfBirth}
          onChange={dateOfBirthHandler}
          required
        />
      </div>

      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  );
};

export default AddNewStudentComponent;

import React from 'react'

const StudentComponent = ({student}) => {
return (
        <div className="card">
          <div className="text-container">
            <h3>{student.studentName}</h3>
            <p className="id">({student.studentID})</p>
            <p className='email'>{student.studentEmail}</p>
            <p className='age'>Age : {student.studentAge}</p>
          </div>
        </div>
      );
}

export default StudentComponent
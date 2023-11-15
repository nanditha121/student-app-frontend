import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddNewStudentComponent from './components/AddNewStudentComponent/AddNewStudentComponent';
import EditStudentComponent from './components/EditStudentComponent/EditStudentComponent';
import GetAllStudentComponent from './components/GetAllStudentComponent/GetAllStudentComponent';
import DeleteStudentComponent from './components/DeleteStudentComponent/DeleteStudentComponent';


function App() {
  return (
    <Router>
            <div className="container">
              <h1>Student Management App</h1>
              
            <nav className="nav-menu">
                <Link to="/" >Home</Link>
                <Link to="/admin/add" >Add Student</Link>
                <Link to="/admin/edit" >Edit Student</Link>
                <Link to="/admin/delete" >Delete Student</Link>
            </nav>
           <Routes>
                 <Route exact path='/' element={<GetAllStudentComponent/>}></Route>
                 <Route path='/admin/add' element={<AddNewStudentComponent/>}></Route>
                 <Route path='/admin/edit' element={<EditStudentComponent/>}></Route>
                 <Route path='/admin/delete' element={<DeleteStudentComponent/>}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;

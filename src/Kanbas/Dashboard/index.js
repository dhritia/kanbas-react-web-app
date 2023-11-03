import { React } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import blue from "../../Images/blue.jpg";
import { FaEdit, FaTrash } from "react-icons/fa";
function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
  ){
  return (
    <div className="wd-dashboard">
      <h1>Dashboard</h1><hr/>
      <h3>Published Courses ({courses.length})</h3><hr/>
      <div className="float-end flex-row p-2">
      <h5>Course</h5>
      <input value={course.name} className="form-control m-2" onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
      <input value={course.number} className="form-control m-2" onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control m-2" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control m-2" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
        <button className="btn btn-success m-2" onClick={addNewCourse} >
          Add Course
        </button>
        <button className="btn btn-secondary m-2" onClick={updateCourse} >
        Update
      </button>

      </div>
      <div className="d-flex flex-row flex-wrap wd-cards">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
            <div className="p-2">
                <div className="card wd-card">
                    <img src={blue} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h6>{course.name}</h6>
                        <h5 class="card-title">{course.number}</h5>
                        <p class="card-text">From: {course.startDate}<br/>Till: {course.endDate}</p>
                        <button className="btn btn-secondary" onClick={(event) => { event.preventDefault(); setCourse(course);  }}>
                        <FaEdit/>Edit
                        </button>
                        <button className="btn btn-danger" onClick={(event) => { event.preventDefault(); deleteCourse(course._id); }}>
                          <FaTrash/>Delete
                        </button>
                    </div>
                </div>
            </div>
          </Link>
        ))}
        </div>
    </div>
  );
}
export default Dashboard;

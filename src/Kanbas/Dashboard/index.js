import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import blue from "../../Images/blue.jpg";
function Dashboard() {
  const courses = db.courses;
  return (
    <div className="wd-dashboard">
      <h1>Dashboard</h1><hr/>
      <h3>Published Courses ({courses.length})</h3><hr/>
      <div class="d-flex flex-row flex-wrap wd-cards">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
            <div className="p-2">
                <div className="card wd-card">
                    <img src={blue} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h6>{course.name}</h6>
                        <h5 class="card-title">{course._id}</h5>
                        <p class="card-text">From: {course.startDate}<br/>Till: {course.endDate}</p>
                        <i class="far fa-edit"></i>
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

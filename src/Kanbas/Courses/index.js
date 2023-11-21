import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import './index.css';
import {FaBars}  from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const URL = "http://localhost:4000/api/courses";
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  const {pathname} = useLocation();
  const [empty, b, c, d, screen] = pathname.split("/");
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  return (
    <div>
        <div className="wd-course-top-bar">
            <FaBars size={30}/>
            
        <h1>{course.name}</h1> <h2>&gt; {screen}</h2>
        </div>
        <hr/>
        <CourseNavigation />
        <div>
            <div
            className="overflow-y-scroll position-fixed bottom-0 end-0"
            style={{
                left: "300px",
                top: "80px",
            }}
            >
            <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home/>} />
                <Route path="Modules" element={<Modules/>} />
                <Route path="Assignments" element={<Assignments/>} />
                <Route path="Assignments/:assignmentId"
                   element={<AssignmentEditor/>}/>
                <Route path="Grades" element={<Grades />} />
            </Routes>
            </div>
        </div>
    </div>
  );
}
export default Courses;

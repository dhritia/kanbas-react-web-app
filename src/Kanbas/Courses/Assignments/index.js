import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaPlus, FaEllipsisV} from "react-icons/fa";
import db from "../../Database";
import './index.css';

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="p-4">
        <input id="search" title="search" className="form-control wd-input" placeholder="Search for Assignment"/>
            <div class="float-end">
                <button className="btn btn-light btn-outline-secondary wd-button"><FaPlus/>Group</button>
                <button className="btn btn-danger wd-button"><FaPlus/>Assignment</button>
                <button className="btn btn-light btn-outline-secondary wd-button"><FaEllipsisV/></button>
            </div>
        <hr/>
      <div className="list-group">
      <h2 className="list-group-item list-group-item-secondary">Assignments for course {courseId}</h2>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item wd-item">
            <h5>{assignment.title}</h5>
            <p className="wd-color">Multiple Modules</p><p style={{display:"inline-block"}}>| 100pts</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;

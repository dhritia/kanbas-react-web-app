import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link, useParams } from "react-router-dom";
import { FaPlus, FaEllipsisV} from "react-icons/fa";
import './index.css';
import{
  setAssignments,
  deleteAssignment,
} from './assignmentsReducer'
import * as client from "../../../kanbas-node-server-app/assignments/client";

function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const dispatch = useDispatch();
  useEffect(() => {
    client.findAssignmentsForCourse(courseId)
      .then((assignments) =>
        dispatch(setAssignments(assignments))
    );
  }, [courseId]);
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments/AssignmentEditor`);
  };
  const handleDeleteAssignment = (assignmentId) => {
    client.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  };
  return (
    <div className="p-4">
        <input id="search" title="search" className="form-control wd-input" placeholder="Search for Assignment"/>
            <div class="float-end">
                <button className="btn btn-light btn-outline-secondary wd-button"><FaPlus/>Group</button>
                <button className="btn btn-danger wd-button" onClick={handleAdd}><FaPlus/>Assignment</button>
                <button className="btn btn-light btn-outline-secondary wd-button"><FaEllipsisV/></button>
            </div>
        <hr/>
      <div className="list-group">
      <h2 className="list-group-item list-group-item-secondary">Assignments for course {courseId}</h2>
      {assignments
         .filter((assignment) => assignment.course === courseId)
         .map((assignment, index) => (
          <li key={index} className="list-group-item wd-item">
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="wd-title">
            <h5>{assignment.title}</h5>
            <p className="wd-color">{assignment.description}</p>
          </Link>
          <button style={{display:"inline-block"}}
          onClick={() => handleDeleteAssignment(assignment._id)} className="float-end btn btn-danger">
          Delete
        </button>
        </li>
        ))}
      </div>
    </div>
  );
}
export default Assignments;

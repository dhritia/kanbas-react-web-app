import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import './index.css';

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
    <div className="p-4">
      <h5>Assignment Name</h5>
      <input value={assignment.title}
             className="form-control mb-2" />
      <textarea className="form-control">This is the assignment description</textarea>
      </div>
    <div className="row wd-row p-4">
        <div className="col-2"><h6>Points</h6></div>
        <div className="col-6"><input className="form-control" title = "points" value = "100"/></div>
    </div>
    <div className="row wd-row p-4">
        <div className="col-2"><h6>Assignment Group</h6></div>
        <div className="col-6">
            <select className="form-select">
                <option>Assignment</option>
                <option>Quiz</option>
            </select>
        </div>
    </div>
    <div className="row wd-row p-4">
        <div className="col-2"><h6>Display Grade as</h6></div>
        <div className="col-6">
            <select className="form-select">
                <option>Percentage</option>
                <option>Points</option>
            </select>
        </div>
    </div>
    <div className="row wd-row p-4">
        <div className="col-2"></div>
        <div className="col-6 form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label className="form-check-label" for="flexCheckDefault">
                Do not count this assignment towards the final grade
            </label>
        </div>
    </div>
    <div className="row wd-row p-4">
        <div className="col-2"><h6>Submission Type</h6></div>
        <div className="card col-6">
            <div className="card-body">
                <select className="form-select">
                    <option>Online</option>
                    <option>Offline</option>
                </select>
                <br/>
                <p>Online Entry Options</p><br/>
                <input className="form-check-input" type="checkbox" value="" id="c1"/>
                <label className="form-check-label" for="c1">
                    Text Entry
                </label><br/><br/>
                <input className="form-check-input" type="checkbox" value="" id="c2"/>
                <label className="form-check-label" for="c2">
                    Website URL
                </label><br/><br/>
                <input className="form-check-input" type="checkbox" value="" id="c3"/>
                <label className="form-check-label" for="c3">
                    Media Recordings
                </label><br/><br/>
                <input className="form-check-input" type="checkbox" value="" id="c4"/>
                <label className="form-check-label" for="c4">
                    Student Annotation
                </label><br/><br/>
                <input className="form-check-input" type="checkbox" value="" id="c5"/>
                <label className="form-check-label" for="c5">
                    File Uploads
                </label><br/>
            </div>
        </div>
    </div>
    <div className="row wd-row p-4">
        <div className="col-2"><h6>Assign</h6></div>
        <div className="card col-6">
            <div className="card-body">
                <p>Assign To</p>
                <input className="form-control" title = "assignto" value = "Everyone"/><br/>
                <p>Due</p>
                <input type="date" className="form-control" title = "due" value = "2023-10-01"/><br/>
                <div className="row">
                    <div className="col-6">
                        <p>Available From</p>
                    </div>
                    <div className="col-6">
                        <p>Until</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <input type="date" className="form-control" title = "avail" value = "2023-10-01"/><br/>
                    </div>
                    <div className="col-6">
                        <input type="date" className="form-control" title = "until" value = "2023-10-11"/><br/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr/>
    <div className="float-end">
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-light btn-outline-secondary m-2 ">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-danger m-2">
        Save
      </button>
    </div>
    </div>
  );
}

export default AssignmentEditor;
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import './index.css';
import{
    addAssignment,
    setAssignment,
    updateAssignment,
  } from '../assignmentsReducer'

function AssignmentEditor() {

  const { assignmentId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  console.log(assignment.title)
  console.log("hehe")
  const handle = () => {
    console.log(assignmentId)
    if (assignmentId !== "AssignmentEditor") {
        console.log("hehe")
        dispatch(updateAssignment(assignment))
    }
    else {
        dispatch(addAssignment({...assignment, course: courseId}))
    }
  }
    return (
    <div>
        <div>
            <div className="p-4">
            <h5>Assignment Name</h5>
            <input value={assignment.title} onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value })) }
                    className="form-control mb-2" />
            <textarea className="form-control" value={assignment.description}
            onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value })) }></textarea>
            </div>
            <div className="row wd-row p-4">
                <div className="col-2"><h6>Points</h6></div>
                <div className="col-6"><input className="form-control" title = "points" value = "100"/></div>
            </div>
            <div className="row wd-row p-4">
                <div className="col-2"><h6>Assign</h6></div>
                <div className="card col-6">
                    <div className="card-body">
                        <p>Due</p>
                        <input type="date" className="form-control" title = "due" value={assignment.due}
                        onChange={(e) => dispatch(setAssignment({ ...assignment, due: e.target.value })) }/><br/>
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
                                <input type="date" className="form-control" title = "avail" value={assignment.availFrom}
                                onChange={(e) => dispatch(setAssignment({ ...assignment, availFrom: e.target.value })) }/><br/>
                            </div>
                            <div className="col-6">
                                <input type="date" className="form-control" title = "until" value={assignment.availTill}
                                onChange={(e) => dispatch(setAssignment({ ...assignment, availTill: e.target.value })) }/><br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <hr/>
        <div className="float-end">
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-light btn-outline-secondary m-2">
                Cancel
            </Link>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
            <button onClick={handle} className="btn btn-danger m-2">
                Save
            </button>
            </Link>
        </div>
        </div>
    </div>
    );
}

export default AssignmentEditor;
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import './index.css';
import{
    addAssignment,
    setAssignment,
    setAssignments,
    updateAssignment,
  } from '../assignmentsReducer'
  import * as client from "../../../../kanbas-node-server-app/assignments/client";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  useEffect(() => {
    client.findAssignmentsForCourse(courseId)
      .then((assignments) =>
        dispatch(setAssignments(assignments))
    );
  }, [courseId]);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  if (assignmentId !== "AssignmentEditor") {
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    dispatch(setAssignment(assignment));
  }
  const handleAddAssignment = () => {
    client.createAssignment(courseId, assignment).then((assignment) => {
        dispatch(addAssignment({...assignment, course: courseId}));
    });
  };
  const handleUpdateAssignment = async () => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };
  const handle = () => {
    if (assignmentId !== "AssignmentEditor") {
        handleUpdateAssignment();
    }
    else {
        handleAddAssignment();
    }
  }
    return (
    <div>
        <div>
            <div className="p-4">
            <h5>Assignment Name</h5>
            <input defaultValue={assignment.title} onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value })) }
                    className="form-control mb-2" />
            <textarea className="form-control" defaultValue={assignment.description}
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
                        <input type="date" className="form-control" title = "due" defaultValue={assignment.due}
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
                                <input type="date" className="form-control" title = "avail" defaultValue={assignment.availFrom}
                                onChange={(e) => dispatch(setAssignment({ ...assignment, availFrom: e.target.value })) }/><br/>
                            </div>
                            <div className="col-6">
                                <input type="date" className="form-control" title = "until" defaultValue={assignment.availTill}
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
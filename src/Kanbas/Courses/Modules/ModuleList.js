import React, { useState }  from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <ul className="list-group p-4">
      <li className="list-group-item">
          <input style={{display: "inline-block", width: "30%",}} className="form-control" value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value })) }
          />
          <button className="btn btn-success m-1" style={{display: "inline-block",}} button onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
          <button className="btn btn-primary m-1" onClick={() => dispatch(updateModule(module))}>
                Update
        </button>

          <textarea style={{width: "30%",}} className="form-control" value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
          />
      </li>
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item p-2">
             <h3>{module.name}</h3>
             <p style={{display: "inline-block",}}>{module.description}</p>
             <button
              onClick={() => dispatch(deleteModule(module._id))} className="float-end btn btn-danger">
              Delete
            </button>
            <button
              onClick={() => dispatch(setModule(module))} className="float-end btn btn-success">
              Edit
            </button>
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import {
  addModule, deleteModule, updateModule, setModule,
  setModules,
} from "./modulesReducer";
import * as client from "../../../kanbas-node-server-app/modules/client";


function ModuleList() {
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const { courseId } = useParams();
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };
  return (
    <ul className="list-group p-4">
      <li className="list-group-item">
          <input style={{display: "inline-block", width: "30%",}} className="form-control" value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value })) }
          />
          <button className="btn btn-success m-1" style={{display: "inline-block",}} button onClick={handleAddModule}>Add</button>
          <button className="btn btn-primary m-1" onClick={handleUpdateModule}>
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
              onClick={() => handleDeleteModule(module._id)} className="float-end btn btn-danger">
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

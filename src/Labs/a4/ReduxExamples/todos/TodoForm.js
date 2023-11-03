import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

function TodoForm() {
  const { todo } = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item"  style={{width: "30%"}}>
      <input className="form-control m-1" style={{display: "inline-block"}}
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value })) }
      />
      <button className="btn btn-warning m-1" style={{display: "inline-block"}} onClick={() => dispatch(addTodo(todo))}> Add </button>
      <button className="btn btn-success m-1" style={{display: "inline-block"}} onClick={() => dispatch(updateTodo(todo))}> Update </button>
    </li>
  );
}
export default TodoForm;

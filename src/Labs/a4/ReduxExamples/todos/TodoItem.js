import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
function TodoItem({
  todo,
}) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item" style={{width: "30%"}}>
      {todo.title}
      <button className="btn btn-danger m-1 float-end" onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
      <button className="btn btn-primary m-1 float-end" onClick={() => dispatch(setTodo(todo))}> Edit </button>
    </li>
  );
}
export default TodoItem;

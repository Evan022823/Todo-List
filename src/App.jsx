import { useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";

export default function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(newTodo) {
    setTodos(currentTodos => [...currentTodos, newTodo]);
  }

  function handleToggle(id) {
    setTodos(currentTodos =>
      currentTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleDelete(id) {
    setTodos(currentTodos =>
      currentTodos.filter(todo => todo.id !== id)
    );
  }

  return (
    <>
      <NewTodoForm addTodo={handleAddTodo} />
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map(todo => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
              />
              {todo.title}
            </label>
            <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

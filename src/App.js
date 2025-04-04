import './App.css';
import React, { useState } from "react";


function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();     // doesnt allow the page to be refreshed
    if (newTodo.trim() === "") return;  // ignores empty input

    setTodos([...todos, { id: Date.now(), text: newTodo }]);    // adds new todo to the list
    setNewTodo("");     // clears the input field after adding the todo
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));   // filters out the todo with the given id
  };


  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <h1>To-Do List</h1>

      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          placeholder="Add a task"
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ 
            marginTop: "1rem",
            display: "flex",
            // justifyContent: "space-between",
            alignItems: "center",
            // borderBottom: "1px solid #ccc",
            paddingBottom: "0.5rem",
            gap: "0.5rem",
            }}>
            <span>{todo.text}</span>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              style={{ marginLeft: "1rem" }}
            >
              Done
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

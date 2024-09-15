import { useState } from "react";
import PropTypes from 'prop-types'; // Import PropTypes

export function NewTodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!newItem.trim()) {
      // Optionally handle empty input
      return;
    }

    addTodo({
      id: crypto.randomUUID(),
      title: newItem,
      completed: false,
    });

    setNewItem(""); // Clear the input field after adding the item
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn" type="submit">Add</button>
    </form>
  );
}

// Define prop types for validation
NewTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired, // addTodo should be a function and is required
};

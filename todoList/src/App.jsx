import React, { useState } from "react";
import "./App.css";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [
        ...t,
        {
          id: Date.now(),
          text: newTask,
          done: false,
        },
      ]);
      setNewTask("");
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addTask();
    }
  }

  function deleteTask(id) {
    setTasks((t) => t.filter((task) => task.id !== id));
  }

  function toggleDone(id) {
    setTasks((t) =>
      t.map((task) =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  const completedTasks = tasks.filter((task) => task.done).length;
  const remainingTasks = tasks.length - completedTasks;
  const progress =
    tasks.length === 0
      ? 0
      : (completedTasks / tasks.length) * 100;

  return (
    <div className="to-do-list">
      {/* Header */}
      <div className="header">
        <div className="icon-circle">📝</div>

        <h1>My Task Planner</h1>

        <p className="subtitle">
          Organize your day efficiently
        </p>
      </div>

      {/* Input */}
      <div className="input-row">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />

        <button
          className="add-button"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      {/* Stats */}
      <div className="stats">
        <div className="stat">
          <div className="stat-num">{tasks.length}</div>
          <div className="stat-label">Total</div>
        </div>

        <div className="stat">
          <div className="stat-num">{completedTasks}</div>
          <div className="stat-label">Done</div>
        </div>

        <div className="stat">
          <div className="stat-num">{remainingTasks}</div>
          <div className="stat-label">Left</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Empty State */}
      {tasks.length === 0 && (
        <p className="empty-msg">
          No tasks yet — add one above!
        </p>
      )}

      {/* Task List */}
      <ol>
        {tasks.map((task, index) => (
          <li
            key={task.id}
            className={task.done ? "done-item" : ""}
          >
            <div className="task-num">
              {index + 1}
            </div>

            <span
              className={`text ${
                task.done ? "done" : ""
              }`}
            >
              {task.text}
            </span>

            <div className="btn-grp">
              <button
                className="done-button"
                onClick={() => toggleDone(task.id)}
              >
                {task.done ? "↩" : "✓"}
              </button>

              <button
                className="delete-button"
                onClick={() => deleteTask(task.id)}
              >
                ✕
              </button>

              <button
                className="move-up"
                onClick={() => moveTaskUp(index)}
                disabled={index === 0}
              >
                ↑
              </button>

              <button
                className="move-down"
                onClick={() => moveTaskDown(index)}
                disabled={index === tasks.length - 1}
              >
                ↓
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;

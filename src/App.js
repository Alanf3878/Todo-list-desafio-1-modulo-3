import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [Task, setTask] = useState("");
  const [TaskList, setTaskList] = useState([]);

  const handleClick = (e) => {
    if (Task.length > 0) {
      setTaskList([
        ...TaskList,{
          Task: Task,
          id: Date.now(),
          value: Task
        }
      ]);
      setTask("");
    }
    e.preventDefault();
  };
  const handleDelete = (id) => {
    setTaskList(TaskList.filter((item) => item.id !== id));
  };
  return (
    <div className="box-container">
      <div className="container">
        <form onSubmit={handleClick}>
          <h1 className="title">Todo List</h1>
          <input
            className="add-task-input"
            value={Task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <button className="button" onClick={handleClick}>
            add
          </button>
          {TaskList.map((item) => (
            <div className="task-container">
              <p>{item.Task}</p>
              <button
                className="buttondelete"
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                X
              </button>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};
export default App;

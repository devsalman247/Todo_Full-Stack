import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [todo, addTodo] = useState([]);
  const [text, setText] = useState("");

  function addTask(e) {
    const task = document.getElementById("todo_enter");
    if (!task.value) {
      return alert("Please enter some text to add todo");
    }
    addTodo((todo) => [...todo, text]);
    setText("");
  }

  function deleteTask(e) {
    let todo2 = todo.filter((item) => {
      console.log(e);
      return todo.indexOf(item) !== e;
    });
    addTodo(todo2);
  }

  return (
    <div className="flex items-center flex-col mt-10 h-full">
      <h2 className="font-medium text-2xl mb-2">My Todo List</h2>
      <div>
        <input
          type="text"
          name="Todo_Task"
          id="todo_enter"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="bg-slate-300 py-2 w-full rounded-md focus:outline-none px-2 mb-4"
        />
        <button
          id="add_todo"
          className="border-1 border-cyan-500"
          onClick={addTask}
        >
          Add Todo
        </button>
      </div>
      <div className="mt-12 bg-gray-300 h-full w-1/3 text-center py-3 rounded-lg">
        <div className="text-zinc-900 w-full h-full text-start">
          {todo.length !== 0 ? (
            todo.map((todoItem, index) => {
              return(
              <>
                <div className="mb-2 rounded-sm bg-slate-50 p-1 mx-3 text-base overflow-hidden">
                  {todoItem}
                  <div>
                    <button className="bg-sky-500 text-white rounded-sm py-1 px-2 m-2 focus:outline-none">
                      Edit
                    </button>
                    <button
                      className="bg-sky-500 text-white rounded-sm p-1 m-2 focus:outline-none"
                      onClick={() => deleteTask(index)}
                    >
                      Delete
                    </button>
                    <i className="fa-light fa-pen-to-square w-4"></i>{" "}
                  </div>
                </div>
              </>
              );
            })
          ) : (
            <p className="ml-4">No Task added yet!!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

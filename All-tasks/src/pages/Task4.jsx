import { useState } from "react";
import Navigation from "../components/Navigation";

const Task4 = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setList([...list, { text: task, done: false }]);
    setTask("");
  };

  const deleteTask = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  const doneTask = (index) => {
    list[index].done = !list[index].done;
    setList([...list]);
  };
  return (
    <div>
      <div className="w-full h-svh flex flex-col gap-5 justify-center items-center">
        <h1 className="text-6xl">Task-4</h1>
        <div>
          <form
            className="flex flex-col justify-center items-center gap-2"
            action="#"
          >
            <input
              onChange={(e) => setTask(e.target.value)}
              required
              className="py-2 px-4 w-full border rounded-lg"
              type="text"
              placeholder="Enter your task"
            />
            <button
              onClick={addTask}
              className="flex justify-center items-center gap-2 border px-4 py-2 rounded-lg hover:cursor-pointer"
            >
              <h1 className="font-bold text-2xl">Add Task</h1>
              <h1 className="text-2xl bg-pink-300 p-2.5 rounded-lg">➕</h1>
            </button>
          </form>
          <div className="flex flex-col gap-2 justify-center items-center">
            {list.map((item, index) => (
              <div className="flex gap-3 justify-center items-center border px-6 py-2 rounded-lg mt-4 bg-gray-300" key={index}>
                <span className="text-xl text-white bg-gray-600 px-6 py-1.5 rounded-lg"
                  onClick={() => doneTask(index)}
                  style={{
                    textDecoration: item.done ? "line-through" : "none",
                  }}
                >
                  {item.text}
                </span>
                <button className="border-black bg-red-500 text-white px-6 py-2 rounded-lg" onClick={() => deleteTask(index)}>Delete</button>
              </div>
            ))}

            <p>Total: {list.length}</p>
            <p>Completed: {list.filter((i) => i.done).length}</p>
          </div>
        </div>
        <Navigation
          prev="Task-3"
          next="Task-5"
          prevLink="task3"
          nextLink="task5"
        />
      </div>
    </div>
  );
};

export default Task4;

import { useState } from "react";
import Navigation from "../components/Navigation";

const Task4 = () => {

  let [task, setTask] = useState("")
  return (
    <div>
      <div className="w-full h-svh flex flex-col gap-5 justify-center items-center">
        <h1 className="text-6xl">Task-4</h1>
        <div>
          <form className="flex flex-col justify-center items-center gap-2" action="#">
            <input onChange={(e)=> setTask(e.target.value)} required className="py-2 px-4 w-full border rounded-lg" type="text" placeholder="Enter your task"/>
            <button  className="flex justify-center items-center gap-2 border px-4 py-2 rounded-lg hover:cursor-pointer">
              <h1 className="font-bold text-2xl">Add Task</h1>
              <h1 className="text-2xl bg-pink-300 p-2.5 rounded-lg">➕</h1>
            </button>
          </form>
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
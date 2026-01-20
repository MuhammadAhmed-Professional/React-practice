import { useState } from "react";
import Navigation from "../components/Navigation";

const Task2 = () => {
 
  let [count, setCount] = useState(0)
  let [reached, setReached] = useState(false)
  
  function increment () {
    setCount(++count)
    if(count === 10){
      setReached(true)
    }
  }
  function decrement () {
    setCount(--count)
    if(count < 10){
      setReached(false)
    }
  }
  function reset () {
    setCount(count = 0)
    setReached(false)
  }

  return (
    <div>
      <div className="w-full h-svh flex flex-col gap-5 justify-center items-center">
        <h1 className="text-6xl">Task-2</h1>
        <div className="flex flex-col justify-center items-center gap-4">
          {count < 10? <h1 className="text-6xl">😊</h1>: <h1 className="text-6xl">😁</h1>}
          <p className="text-6xl text-center">{count}</p>
          {reached && <h1 className="bg-green-400 px-8 py-3">You have reached 10</h1>}
          <div className="flex gap-4">
            <button onClick={() => increment()} className="border px-6 py-2 text-2xl bg-green-400 text-white border-black">Increment</button>
            <button onClick={() => decrement()} className="border px-6 py-2 text-2xl bg-red-400 text-white border-black">Decrement</button>
            <button onClick={() => reset()} className="border px-6 py-2 text-2xl bg-blue-400 text-white border-black">Reset</button>
          </div>
        </div>
        <Navigation
          prev="Task-1"
          next="Task-3"
          prevLink=""
          nextLink="task3"
        />
      </div>
    </div>
  );
};

export default Task2;

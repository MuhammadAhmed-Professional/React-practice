import { useState } from "react";
import Navigation from "../components/navigation";

const Task3 = () => {
  let [info, setInfo] = useState(false)
  let [username, setUsername] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  function check () {
    setInfo(true)
  }

  return (
    <div className="mt-10 mb-20">
      <div className="w-full h-svh flex flex-col gap-5 justify-center items-center">
        <h1 className="text-6xl">Task-3</h1>
        <form className="flex flex-col justify-center items-center gap-6 py-8 border border-black rounded-lg w-80" action="#">
          <input onChange={(e)=> setUsername(e.target.value)} required className="py-2 px-4 w-[80%] border rounded-lg" type="text" placeholder="Username"/>
          <input onChange={(e)=> setEmail(e.target.value) } required className="py-2 px-4 w-[80%] border rounded-lg" type="email" placeholder="Email"/>
          <input onChange={(e)=> setPassword(e.target.value) } required className="py-2 px-4 w-[80%] border rounded-lg" type="password" placeholder="Password"/>
          <button onClick={check} className="border py-2 px-12 text-xl font-bold rounded-lg hover:cursor-pointer hover:bg-black hover:text-white transition-all duration-250">Sign Up</button>
        </form>
        {info &&
          <div className="flex flex-col justify-center items-center text-green-900 bg-green-400 px-5 py-4">
            <h1>Username: {username}</h1>
            <h1>Email: {email}</h1>
            <h1>Password: {password}</h1>
          </div>}
        <Navigation
          prev="Task-2"
          next="Task-4"
          prevLink="task2"
          nextLink="task4"
        />
      </div>
    </div>
  );
};

export default Task3;
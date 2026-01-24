import Navigation from "../components/Navigation"


const Task7 = () => {
  return (
   <div>
      <div className="w-full h-svh flex flex-col gap-5 justify-center items-center">
        <h1 className="text-6xl">Task-7</h1>
        <Navigation
          prev="Task-6"
          next="Task-8"
          prevLink="task6"
          nextLink="task8"
        />
      </div>
    </div>
  )
}

export default Task7

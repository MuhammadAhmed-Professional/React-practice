import Navigation from "../components/navigation";

const Task4 = () => {
  return (
    <div>
      <div className="w-full h-svh flex flex-col gap-5 justify-center items-center">
        <h1 className="text-6xl">Task-4</h1>
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
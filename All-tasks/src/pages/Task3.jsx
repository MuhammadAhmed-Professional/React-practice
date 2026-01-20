import Navigation from "../components/navigation";

const Task3 = () => {
  return (
    <div>
      <div className="w-full h-svh flex flex-col gap-5 justify-center items-center">
        <h1 className="text-6xl">Task-3</h1>
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
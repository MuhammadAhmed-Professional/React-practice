import Navigation from "../components/Navigation";

const Task5 = () => {
  return (
    <div>
      <div className="w-full h-svh flex flex-col gap-5 justify-center items-center">
        <h1 className="text-6xl">Task-5</h1>
        <Navigation
          prev="Task-4"
          next="Task-6"
          prevLink="task4"
          nextLink="task6"
        />
      </div>
    </div>
  );
};

export default Task5;
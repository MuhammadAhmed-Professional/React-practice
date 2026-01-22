import Footer5 from "../components/Footer5";
import Header5 from "../components/Header5";
import Main5 from "../components/Main5";
import Navigation from "../components/Navigation";
import Sidebar5 from "../components/Sidebar5";

const Task5 = () => {
  return (
    <div className="relative">
      <div className="w-full h-svh flex flex-col gap-5 justify-center items-center">
        <h1 className="text-6xl">Task-5</h1>
        <div className="absolute w-full top-0 -z-10">
          <Header5></Header5>
          <div className="flex">
            <Sidebar5></Sidebar5>
            <Main5></Main5>
          </div>
          <Footer5></Footer5>
        </div>
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
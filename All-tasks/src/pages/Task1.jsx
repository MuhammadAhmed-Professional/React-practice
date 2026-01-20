import Navigation from "../components/navigation"
import StudentCard from "../components/StudentCard"

const Task1 = () => {

  let studentData = [
    {name: "Muhammad", rollNo: 323325, batch: 16, language: "English"},
    {name: "Furqan", rollNo: 323643, batch: 15, language: "English"},
    {name: "Zakir", rollNo: 865583, batch: 16, language: "Urdu"},
    {name: "Hamza", rollNo: 748392, batch: 15, language: "German"},
  ]

  return (
    <div className="w-full h-svh flex flex-col gap-5 justify-center items-center">
      <h1 className="text-6xl">Task-1</h1>
      <div className="flex justify-center items-center gap-5">
        {studentData.map((item, id)=>(
          <StudentCard key={id} name={item.name} rollNo={item.rollNo} batch={item.batch} language={item.language}/>
        ))}
      </div>
      <Navigation prev="Task-1" next="Task-2" prevLink="" nextLink="task2"/>
    </div>
  )
}

export default Task1

const StudentCard = ({name, rollNo, batch, language}) => {
  return (
    <div className="flex flex-col justify-center items-center text-2xl text-gray-600 bg-amber-200 px-4 py-8 gap-2 border  rounded-md">
        <h1>Name: {name}</h1>
        <h1>Roll No: {rollNo}</h1>
        <h1>Batch: {batch}</h1>
        <h1>Language: {language}</h1>
    </div>
  )
}

export default StudentCard

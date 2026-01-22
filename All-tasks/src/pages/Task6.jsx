import { useState } from "react"
import Navigation from "../components/Navigation"
import ProductCard from "../components/ProductCard"

const Task6 = () => {
  let [title, setTitle] = useState("no title given")
  let [price, setPrice] = useState(0)
  let [image, setImage] = useState("/noProduct.png")
  let [stock, setStock] = useState("out of stock")
  let [generate, setGenerate] = useState(false)

  return (
   <div>
      <div className="w-full h-svh flex flex-col gap-5 justify-center items-center">
        <h1 className="text-6xl">Task-6</h1>
        <div className="border-2 px-6 py-4 text-2xl gap-4 font-bold flex flex-col justify-center items-center">
            <h1>Add Details to Generate Card</h1>
            <div className="flex flex-wrap text-[16px] gap-4 justify-center items-center">
                <label>Title: <input className="border rounded-lg py-1.5 px-3" type="text" placeholder="Enter Title" required onChange={(e)=> setTitle(e.target.value)}/></label>
                <label>Price: <input className="border rounded-lg py-1.5 px-3" type="number" placeholder="Enter Price" required onChange={(e)=> setPrice(e.target.value)}/></label>
                <label>Image Url: <input className="border rounded-lg py-1.5 px-3" type="text" placeholder="Enter Url" required onChange={(e)=> setImage(e.target.value)}/></label>
                <label>Stock: <input className="border rounded-lg py-1.5 px-3" type="text" placeholder="Enter Stock Status" required onChange={(e)=> setStock(e.target.value)}/></label>
            </div>
            <button onClick={() => setGenerate(true)} className="border rounded-lg py-1.5 px-3 bg-green-400 hover:cursor-pointer">Generate</button>
        </div>
        {generate && <ProductCard title={title} price={price} stock={stock} image={image}/>}
        <Navigation
          prev="Task-5"
          next="Task-7"
          prevLink="task5"
          nextLink="task7"
        />
      </div>
    </div>
  )
}

export default Task6

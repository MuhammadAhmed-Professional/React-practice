import { Link } from "react-router-dom"

const Navigation = ({prev, next, prevLink, nextLink}) => {
  return (
    <div className="w-full mt-20 flex justify-around items-center">
        <Link to={`/${prevLink}`}>
            <button className="border-2 border-black px-8 py-2 text-4xl hover:cursor-pointer text-white bg-red-600 font-bold rounded-lg">{prev}</button>
        </Link>
        <Link to={`/${nextLink}`}>
            <button className="border-2 border-black px-8 py-2 text-4xl hover:cursor-pointer text-white bg-green-600 font-bold rounded-lg">{next}</button>
        </Link>
    </div>
  )
}

export default Navigation

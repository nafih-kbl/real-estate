import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'

export default function Header() {
  const {currentUser}=useSelector((state)=>state.user)
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-lg flex flex-wrap">
            <span className="text-slate-500">Nafih</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          ></input>
          <FaSearch className="text-slate-700"></FaSearch>
        </form>
        <ul className="flex gap-3">
          <Link to={'/'}>
            <li className="hidden sm:inline text-slate-600 hover:underline">
              Home
            </li>
          </Link>
          <Link to={'About'}>
            <li className="hidden sm:inline text-slate-600 hover:underline">
              About
            </li>
          </Link>
          <Link to={'Profile'}>
            {currentUser ?(
              <img className="rounded-full h-8 w-8 object-cover" src={currentUser.avatar} alt="profile"/>
            ):(
              <li className=" text-slate-600 hover:underline">SignIn</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}

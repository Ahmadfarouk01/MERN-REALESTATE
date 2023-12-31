import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-600 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-5">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap">
            <span className="text-slate-800">Ahmad</span>
            <span className="text-slate-500">Estate</span>
          </h1>
        </Link>

        <form className="bg-slate-300 p-2 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-black" />
        </form>
        <ul className="flex gap-4 text-sm sm:text-xl">
            <Link to ="/">
            <li className="hidden sm:inline text-slate-400 hover:underline font-bold">
            Home
          </li>
            </Link>
         <Link to="/About">
         <li className="hidden sm:inline text-slate-400 hover:underline font-bold">
            About
          </li>
         </Link>
          <Link to="/sign-in">
          <li className="text-slate-400 hover:underline font-bold">
            Signin
          </li>
          </Link>
         
        </ul>
      </div>
    </header>
  );
}

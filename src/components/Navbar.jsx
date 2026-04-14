import { Link } from "react-router-dom"

function Navbar() {

  return (
    <nav className="fixed glass-nav top-0 z-100 flex w-full items-center justify-between px-6 py-6 transition-all duration-300 md:px-16">

     <div className="text-2xl font-black tracking-tighter text-red-600 md:text-3xl">CINEMA</div>


      <ul className="hidden items-center gap-10 text-sm font-semibold tracking-widest text-[#FAF4F8] md:flex">

        <Link to="/" className="relative group  px-2 py-1 hover:text-red-500 transition-colors duration-300">
          HOME
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
        </Link>

        <Link
          to="Movies"
          className="relative group px-2 py-1 hover:text-red-500 transition-colors duration-300"
        >
          MOVIES
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
        </Link>


        <Link to="/" className="relative group px-2 py-1 hover:text-red-500 transition-colors duration-300">
          TV SHOWS
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
        </Link>


        <Link to="/" className="relative group px-2 py-1 hover:text-red-500 transition-colors duration-300">
          Our LIST
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
        </Link>
      </ul>

      <div className="flex items-center gap-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-5 w-5 cursor-pointer hover:text-red-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <button className="rounded-full bg-red-600 px-6 py-2 text-xs font-bold tracking-tighter transition hover:bg-red-700 hover:scale-105 active:scale-95">
          SUBSCRIBE
        </button>
      </div>
    </nav>
  )
}

export default Navbar
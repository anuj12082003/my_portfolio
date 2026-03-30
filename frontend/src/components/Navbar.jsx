import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-black text-white flex justify-between items-center px-10 py-4">

      <h1 className="text-xl font-bold text-blue-400">
        MyPortfolio
      </h1>

      <ul className="flex gap-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

    </nav>
  )
}

export default Navbar
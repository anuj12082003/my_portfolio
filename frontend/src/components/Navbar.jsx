import { Link } from "react-router-dom"
import { motion as Motion } from "framer-motion"

function Navbar() {

  return (

    <Motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-700"
    >

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}

        <h1 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
          Anuj.dev
        </h1>

        {/* Navigation */}

        <ul className="flex gap-8 font-medium text-slate-700 dark:text-slate-200">

          <li>
            <Link className="hover:text-emerald-500 transition" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="hover:text-emerald-500 transition" to="/about">
              About
            </Link>
          </li>

          <li>
            <Link className="hover:text-emerald-500 transition" to="/projects">
              Projects
            </Link>
          </li>

          <li>
            <Link className="hover:text-emerald-500 transition" to="/contact">
              Contact
            </Link>
          </li>

        </ul>

      </div>

    </Motion.nav>

  )
}

export default Navbar
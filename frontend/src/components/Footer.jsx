import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

function Footer() {

  return (

    <footer className="bg-white dark:bg-slate-950 text-center py-10 border-t border-slate-200 dark:border-slate-800">

      <h2 className="text-2xl font-semibold text-emerald-500 mb-2">
        Anuj Gupta
      </h2>

      <p className="text-slate-600 dark:text-slate-400 mb-6">
        MERN Stack Developer
      </p>

      <div className="flex justify-center gap-6 text-xl">

        <a
          href="https://github.com/anuj12082003"
          target="_blank"
          rel="noreferrer"
          className="hover:text-emerald-500 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/anuj-gupta-2488b7268/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-emerald-500 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:anuj9284gupta@gmail.com"
          className="hover:text-emerald-500 transition"
        >
          <FaEnvelope />
        </a>

      </div>

      <p className="text-slate-500 text-sm mt-6">
        © {new Date().getFullYear()} Anuj Gupta
      </p>

    </footer>

  )
}

export default Footer
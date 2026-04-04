import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

function SocialLinks() {

  return (

    <div className="fixed left-5 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-slate-700 dark:text-white">

      <a
        href="https://github.com/anuj12082003"
        target="_blank"
        rel="noreferrer"
        className="hover:text-emerald-500 transition"
      >
        <FaGithub size={24} />
      </a>

      <a
        href="https://www.linkedin.com/in/anuj-gupta-2488b7268/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-emerald-500 transition"
      >
        <FaLinkedin size={24} />
      </a>

      <a
       href="https://mail.google.com/mail/?view=cm&fs=1&to=anuj9284gupta@gmail.com"
         target="_blank"
         rel="noreferrer"
          className="hover:text-emerald-500 transition"
        >
          <FaEnvelope size={24} />
        </a>

    </div>

  )
}

export default SocialLinks
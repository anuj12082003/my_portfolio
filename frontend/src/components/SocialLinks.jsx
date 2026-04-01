
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

function SocialLinks() {
  return (
    <div className="fixed left-5 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-white">

      <a
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-400 transition"
      >
        <FaGithub size={24} />
      </a>

      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-400 transition"
      >
        <FaLinkedin size={24} />
      </a>

      <a
        href="mailto:youremail@gmail.com"
        className="hover:text-blue-400 transition"
      >
        <FaEnvelope size={24} />
      </a>

    </div>
  )
}

export default SocialLinks
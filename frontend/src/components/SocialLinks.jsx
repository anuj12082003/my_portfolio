import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

function SocialLinks() {
  return (
    <div className="fixed left-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 text-white">

      <a
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-400 hover:scale-110 transition duration-300"
      >
        <FaGithub size={24} />
      </a>

      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-400 hover:scale-110 transition duration-300"
      >
        <FaLinkedin size={24} />
      </a>

      <a
        href="mailto:youremail@gmail.com"
        className="hover:text-blue-400 hover:scale-110 transition duration-300"
      >
        <FaEnvelope size={24} />
      </a>

    </div>
  )
}

export default SocialLinks
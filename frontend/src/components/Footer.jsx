import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-black text-white py-10 border-t border-gray-800">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-semibold mb-4">
          Anuj Gupta
        </h2>

        <p className="text-gray-400 mb-6">
          Full Stack Developer | MERN Stack
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl mb-6">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 hover:scale-110 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 hover:scale-110 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:youremail@gmail.com"
            className="hover:text-blue-400 hover:scale-110 transition duration-300"
          >
            <FaEnvelope />
          </a>

        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Anuj Gupta. All rights reserved.
        </p>

      </div>

    </footer>
  )
}

export default Footer
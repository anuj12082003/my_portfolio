import { motion as Motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Tailwind",
    tech: ["React", "Tailwind"],
    github: "#",
    demo: "#"
  },
  {
    title: "MERN Blog App",
    description: "Full stack blog application using MERN stack",
    tech: ["MongoDB", "Express", "React", "Node"],
    github: "#",
    demo: "#"
  },
  {
    title: "Task Manager",
    description: "Task manager with authentication and dashboard",
    tech: ["React", "Node", "MongoDB"],
    github: "#",
    demo: "#"
  }
]

function ProjectsSection() {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <Motion.h2
            initial={{opacity:0,y:-30}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.6}}
            className="text-4xl font-bold text-center mb-12"
            >
            My Projects
        </Motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <Motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-blue-500/30 transition duration-300"
            >

              {/* Project Image Placeholder */}
              <div className="bg-gray-800 h-40 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 text-sm">
                  Project Image
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-800 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 hover:scale-105 transition duration-300"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:scale-105 transition duration-300"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </Motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default ProjectsSection
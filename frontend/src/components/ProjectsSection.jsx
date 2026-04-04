import { motion as Motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

function ProjectsSection() {

  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern MERN portfolio with animations and contact form.",
      image: "/projects/portfolio.png",
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourportfolio.com"
    },
    {
      title: "Task Manager",
      description: "Full stack task manager built with React, Node.js and MongoDB.",
      image: "/projects/taskmanager.png",
      github: "https://github.com/yourusername/taskmanager",
      live: "https://taskmanager-demo.com"
    },
    {
      title: "Weather App",
      description: "React weather app that fetches live weather data from API.",
      image: "/projects/weather.png",
      github: "https://github.com/yourusername/weather",
      live: "https://weather-demo.com"
    }
  ]

  return (

    <section id="projects" className="py-24 px-6 bg-white dark:bg-slate-950">

      <div className="max-w-7xl mx-auto text-center">

        <Motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-slate-800 dark:text-white mb-16"
        >
          My Projects
        </Motion.h2>

        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <Tilt key={index} scale={1.05} className="rounded-xl">

              <Motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">

                  <h3 className="text-xl font-semibold text-emerald-500 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex justify-center gap-4">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-slate-200 dark:bg-slate-700 px-4 py-2 rounded hover:bg-slate-300 dark:hover:bg-slate-600 transition"
                    >
                      <FaGithub />
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600 transition"
                    >
                      <FaExternalLinkAlt />
                      Live
                    </a>

                  </div>

                </div>

              </Motion.div>

            </Tilt>

          ))}

        </div>

      </div>

    </section>

  )
}

export default ProjectsSection
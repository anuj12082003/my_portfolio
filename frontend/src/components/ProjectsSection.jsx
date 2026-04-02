import { motion as Motion } from "framer-motion"

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
    <section id="projects" className="bg-gray-900 text-white py-20 px-6">

      <div className="max-w-6xl mx-auto text-center">

        <Motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
        >
          Projects
        </Motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="bg-black rounded-xl overflow-hidden shadow-lg"
            >

              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex justify-center gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-400"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </Motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default ProjectsSection
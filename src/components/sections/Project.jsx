import carImg from "../../img/CAR.png";
import foodImg from "../../img/FOOD.jpg";
import photoImg from "../../img/photo.jpg";
import movieImg from "../../img/movielist.png";


const projectData = [
  {
    title: "Line Following Car",
    description:
      "A line-following car made with Arduino is a small robot that uses infrared sensors to detect and follow a path, typically a black line on a white surface.",
    tech: ["C++", "Electronics", "Microprocessors"],
    image: carImg,
  },
  {
    title: "Movielist Website",
    description:
      "A collection of movies spanning various genres, offering a blend of thrilling plots, emotional depth, and unforgettable performances.",
    tech: ["React.js"],
    image: movieImg,
  },
  {
    title: "Epicurean Delight",
    description:
      "An Android application designed to showcase a collection of authentic Filipino recipes.",
    tech: ["Java", "Kotlin", "Figma"],
    image: foodImg,
  },
  {
    title: "Photography",
    description:
      "This project showcases my work as a photographer, capturing moments that tell unique stories.",
    tech: ["Photoshop", "Cameras", "Lightroom"],
    image: photoImg,
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 bg-[#0f172a] text-white"
    >
    
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mx-auto max-w-4xl">
            {projectData.map((project, index) => (
              <div
                key={index}
                className="relative group rounded-xl overflow-hidden border border-white/10 aspect-square"
              >
                {/* Background Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-between p-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-300 mb-4 line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-500/20 text-blue-300 text-xs py-1 px-2 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="text-blue-400 hover:text-blue-300 text-sm"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      
    </section>
  );
};

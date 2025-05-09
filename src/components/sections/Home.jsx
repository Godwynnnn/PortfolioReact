import godwynImage from "../../img/CIRCLEGRAD.png";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-[#0F172A]"
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 gap-10 z-10">
        
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Hi, I'm Gabriele Godwyn L. Ileto
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-xl">
            Hello! I’m Godwyn Ileto, a passionate and driven Computer Engineer. My journey in
            computer engineering has been fueled by a fascination for how technology shapes our
            world and a determination to contribute meaningfully to this ever-evolving field.
            I specialize in hardware and software development, with a keen interest in embedded
            systems, IoT, and full-stack web development. Over the years, I’ve developed skills
            in programming, circuit design, and problem-solving, blending creativity and
            analytical thinking to design solutions that address real-world challenges.
          </p>

          <div className="flex flex-col items-center md:items-start space-y-4">
            
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
              >
                Contact Me
              </a>
            </div>

            
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.instagram.com/godwynnnn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 text-3xl hover:text-pink-400 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/godwyn28" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-3xl hover:text-blue-500 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/GabrieleGodwyn" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 text-3xl hover:text-sky-300 transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={godwynImage}
            alt="Godwyn Ileto"
            className="w-72 h-72 object-cover rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

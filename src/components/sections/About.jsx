export const About = () => {
  const hobbies = [
    "Watching Movies or TV Shows",
    "Playing Computer Games",
    "Basketball",
    "Billiards",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Passionate Computer Engineer with expertise in computer hardware and
            creating innovative solutions. Experienced in designing and
            implementing embedded systems, as well as troubleshooting and
            optimizing computer components for maximum efficiency. Eager to
            contribute technical skills and creativity to real-world projects
            that drive technological advancement.
          </p>
        </div>

        {/* Education and Hobbies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Education */}
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-base">
              <li>
                <strong>B.S. in Computer Engineering</strong> - Bulacan State
                University Bustos Campus (2021–2025)
              </li>
              <li>
                <strong>Senior High School</strong> - Asian Institute of Science
                and Technology (2019–2021)
              </li>
              <li>
                <strong>Junior High School</strong> - Our Lady of Mt. Carmel
                College (2014–2019)
              </li>
            </ul>
          </div>

          {/* Hobbies */}
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🎬 Hobbies</h3>
            <div className="flex flex-wrap gap-3 text-gray-300">
              {hobbies.map((hobby, index) => (
                <span
                  key={index}
                  className="bg-purple-500/10 text-purple-300 py-2 px-4 rounded-full text-base hover:bg-purple-500/20 hover:shadow-[0_2px_12px_rgba(168,85,247,0.2)] transition"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

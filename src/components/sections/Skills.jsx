import React, { useState } from "react";
import { cn } from "@/lib/utils"; // Make sure this path resolves correctly

const skills = [
  { name: "HTML/CSS", level: 70, category: "Frontend" },
  { name: "JavaScript", level: 60, category: "Frontend" },
  { name: "React", level: 60, category: "Frontend" },
  { name: "TypeScript", level: 0, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Next.js", level: 0, category: "Frontend" },
  { name: "Node.js", level: 0, category: "Backend" },
  { name: "Python", level: 50, category: "Backend" },
  { name: "PHP", level: 40, category: "Backend" },
  { name: "C++", level: 50, category: "Backend" },
  { name: "GraphQL", level: 0, category: "Backend" },
  { name: "Git/GitHub", level: 40, category: "Tools" },
  { name: "Docker", level: 0, category: "Tools" },
  { name: "Figma", level: 85, category: "Tools" },
  { name: "VS Code", level: 95, category: "Tools" },
];

const categories = ["All", "Frontend", "Backend", "Tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    
    <section id="Skills" className="py-16 px-4 md:px-12 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">My Skills</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white/10 p-4 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
            <div className="w-full bg-gray-700 h-2 rounded">
              <div
                className="bg-blue-500 h-2 rounded"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-sm mt-2 text-right">{skill.level}%</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

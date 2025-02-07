import { useState } from "react";


const Skill = () => {
    const skills = [
        { id: "html", name: "HTML", percentage: "92%", icon: "🔶" },
        { id: "css", name: "CSS3", percentage: "80%", icon: "🔷" },
        { id: "js", name: "Javascript", percentage: "85%", icon: "🟡" },
        { id: "react", name: "ReactJS", percentage: "89%", icon: "⚛" },
      ];
      const [hoveredSkill, setHoveredSkill] = useState(null);
    return (
        <div>
                <section className="py-20 text-center">
      <h2 className="text-4xl font-bold text-purple-700 mb-4">My Skills</h2>
      <p className="text-lg text-gray-600 mb-12">We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.</p>
      
      <div className="flex justify-center space-x-4">
        {skills.map((skill, index) => (
          <div
            key={skill.id}
            className={`p-6 rounded-lg transition transform cursor-pointer ${hoveredSkill === index ? 'bg-purple-900 text-white scale-105' : 'bg-gray-100 text-gray-600'}`}
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.percentage}</p>
            <p className="text-purple-700 font-medium mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
            
        </div>
    );
};

export default Skill;
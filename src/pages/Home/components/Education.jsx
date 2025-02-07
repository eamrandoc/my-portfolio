
const Education = () => {
    const experiences = [
        { year: "2019 - Present", title: "Govt Service", location: "Bangladesh RIce Research Institute" },
        { year: "2024 - 2025", title: "Programming Course", location: "Programming Hero, Dhaka" },
      ];
    const educations = [
        
        { year: "2008 - 2013", title: "BSC (FWT)", location: "Khulna University, Khulna" },
        { year: "2004 - 2006", title: "HSC", location: "Khulna Govt Adarsha Sundarban College, Khulna" },
        { year: "2002 - 2004", title: "SSC", location: "Khulna Zilla School, Khulna" },
      ];
    return (
        <div>
             <section className="py-20 bg-white text-center">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-purple-700 mb-6">My Experience</h2>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-purple-700">{exp.year}</h3>
                  <p className="text-lg font-bold">{exp.title}</p>
                  <p className="text-gray-600">{exp.location}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-purple-700 mb-6">My Education</h2>
            <div className="space-y-4">
              {educations.map((edu, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-purple-700">{edu.year}</h3>
                  <p className="text-lg font-bold">{edu.title}</p>
                  <p className="text-gray-600">{edu.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>   
        </div>
    );
};

export default Education;
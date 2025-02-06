import { useState, useEffect } from 'react';
import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs';

const Services = () => {
  const [services, setServices] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    // Fetching the JSON data from the public folder
    fetch('/serviceList.json')
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error('Error loading services data:', error));
  }, []);

  return (
    <div>
      <section className="py-20 bg-gray-100 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-purple-700 mb-4">My Quality Services</h2>
          <p className="text-lg text-gray-600 mb-12">We put your ideas in the form of a unique web project that inspires you and your customers.</p>

          <div className="space-y-6">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col md:flex-row items-center md:items-start text-left p-6 rounded-lg shadow-lg transition transform hover:scale-105 cursor-pointer ${hoveredIndex === index ? 'bg-gradient-to-r from-purple-500 to-purple-700 text-white' : 'bg-white'}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className={`text-2xl font-bold mr-4 ${hoveredIndex === index ? 'text-white' : 'text-purple-600'}`}>{service.id}</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className={hoveredIndex === index ? 'text-white' : 'text-gray-600'}>{service.description}</p>
                </div>
                {hoveredIndex === index ? <BsArrowDownRight className="text-2xl ml-auto text-white" /> : <BsArrowUpRight className="text-2xl ml-auto text-purple-700" />}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

import React from 'react';
import { Code, Palette/*, Briefcase, FileText*/ } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design and Optimization",
      description: "Designing intuitive, engaging experiences that capture your brand and enhance user satisfaction.",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&q=80&w=800"
     },
    // {
    //   icon: <Briefcase className="w-12 h-12" />,
    //   title: "IT Consultancy",
    //   description: "Strategic technology guidance to help your business grow and succeed.",
    //   image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800"
    // },
    // {
    //   icon: <FileText className="w-12 h-12" />,
    //   title: "Company Profiles",
    //   description: "Professional documentation and presentation of your business identity.",
    //   image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800"
    // }
  ];

  return (
    <section className="py-20 px-4 bg-[#112240]" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-[#0a192f] border border-gray-800 
                hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-blue-400">{service.icon}</div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Events: React.FC = () => {
  const events = [
    {
      title: "Gophercon-Africa 2024",
      role: "Participant",
      topic: "Annual conference uniting Go enthusiasts for innovation, collaboration, and ecosystem progress across Africa.",
      date: "October 2024",
      location: " Ihub, Nairobi",
      image: "file2.jpeg"
    },
    {
      title: "Google Developer Groups(GDG) 2024",
      role: "Participant",
      topic: "Build with AI",
      date: "June 2023",
      location: "UON, Kisumu",
      image: "file4.JPG"
    },
    {
      title: "Pint of Science 2023",
      role: "Panelist",
      topic: "AI in Modern Applications",
      date: "May 2024",
      location: "Lakehub, Kisumu",
      image: "file6.JPG"
    },
    {
      title: "kisumu Gophers 2024",
      role: "Contributor",
      topic: "API's",
      date: "November 2024",
      location: "Lakehub, Kisumu",
      image: "file3.jpeg"
    },
    {
      title: "Post-Devcon Kenya",
      role: "Atendee",
      topic: "Empowering kenya for web3",
      date: "Dec 2024",
      location: "Mega Cinema, Kisumu",
      image: "file8.jpeg"
    },
    {
      title: "Code & Cheer Hackathon",
      role: "Panelist",
      topic: "Digital tools for small Business",
      date: "Dec 2024",
      location: "LakeHub, Kisumu",
      image: "file1.jpeg"
    }
  ];

  return (
    <section className="py-20 px-4" id="events">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Speaking & Events</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-md 
              border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-blue-400 mb-4">{event.role} - {event.topic}</p>
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
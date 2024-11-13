import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Fred Gitonga",
      role: "Founder Code Ujuzi App",
      image: "fred.jpg",
      content: "Working with Allan was an absolute pleasure. His expertise in web development helped us launch our platform months ahead of schedule.",
      rating: 5
    },
    {
      name: "Hussein Khalid",
      role: "CEO at Code & Circuits",
      image: "hussein.JPG",
      content: "The User interface design's exceeded our expectations. Allan has a unique ability to translate ideas into stunning visual interfaces.",
      rating: 5
    },
    {
      name: "Cheryl Owala",
      role: "Founder Kintsugi App",
      image: "cheryl.JPG",
      content: "Allan's IT consultancy services were instrumental in scaling our infrastructure. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#0a192f]" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Client Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#112240] rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 
                transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 italic flex-grow">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
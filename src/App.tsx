import  { useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import Header from './components/Header';
import Bio from './components/Bio';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import Events from './components/Events';
import Blog from './components/Blog';
import Services from './components/Services';
import Testimonials from './components/Testimonials';


function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

      // Form validation function
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorMessage('All fields are required.');
      return false;
    }
    // Basic email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

 // Form submit handler
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!validateForm()) return; // If validation fails, do not proceed

  // Here, you can add the logic to submit the form data
  console.log('Form data:', formData);

  // Show success message and hide it after 3 seconds
  setShowSuccessMessage(true);
  setTimeout(() => setShowSuccessMessage(false), 3000);

  // Reset the form data after submission
  setFormData({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
};

  const skills = [
    { name: 'Go', level: 'Expert' },
    { name: 'JavaScript', level: 'Expert' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'MySQL', level: 'Advanced' },
    { name: 'Rust', level: 'Intermediate' },
    { name: 'C', level: 'Intermediate' },
    { name: 'CSS', level: 'Expert' },
    { name: 'HTML5', level: 'Expert' },
    { name: 'React', level: 'Expert' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'UI/UX', level: 'Advanced' },
    { name: 'Docker', level: 'Expert' },
    { name: 'AWS', level: 'Advanced' },
  ] as const;

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section with Responsive Background Image */}
      <div 
        className="min-h-screen relative bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('/file1.jpg')",
          backgroundAttachment: "scroll" // Changed from fixed for better mobile support
        }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.001px]" />
        <Header />

        <section className="relative h-screen flex flex-col justify-center items-center px-4 py-20">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-block animate-float">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                Allan Robinson Kamau
              </h1>
            </div>
            <p className="text-lg md:text-2xl text-gray-1000 mb-8">
              Software Developer
            </p>
            <div className="flex gap-4 justify-center mb-12">
              <a href="https://github.com/Githaiga22" className="hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/allan-robinson-3b54511a4/" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:allangithaiga5@gmail.com" className="hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="absolute bottom-8 z-10 animate-bounce">
            <ChevronDown className="w-8 h-8" />
          </div>
        </section>
      </div>

      {/* Rest of the sections with solid color backgrounds */}
      <div className="relative bg-[#0a192f]">
        <div className="container mx-auto">
          <Bio />
          <Services />
          <section className="py-20 px-4 bg-[#112240]" id="projects">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                  title="E-Commerce Platform"
                  description="Agrilink is an eCommerce app leveraging blockchain to provide farmers and manufacturers with a secure, transparent platform for product registration, transaction tracking, direct communication, and simulated payment recording, all while ensuring data immutability and easy access via a user-friendly interface."
                  image="Agrilink.png"
                  tags={['GO', 'Solidity', 'JS']}
                  link="https://github.com/rodneyo1/blockchain-agri-dtm"
                />
                <ProjectCard
                  title="AI Skill-learning platform"
                  description="Code Ujuzi is an  AI-powered coding app that accelerates learning by providing real-time translations into African languages, utilizing Llama models to enhance understanding in software development."
                  image="small_logo.png"
                  tags={['GO', 'Llama 3.2', 'JS']}
                  link="https://github.com/codeujuzi/codeujuzi.github.io"
                />
                <ProjectCard
                  title="Tic-Tac-Toe Board Game "
                  description=" The game features an intelligent AI opponent using the Minimax algorithm, allowing players to engage in a challenging and strategic experience."
                  image="tic-tac-toe-game.avif"
                  tags={['GO']}
                  link="https://github.com/Githaiga22/TicTacToe-Game-An-Implementation-of-CS50-Introduction-to-Artificial-Intelligence-"
                />
                
              </div>
            </div>
          </section>

         <section className="py-20 px-4 bg-[#0a192f]">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill) => (
        <SkillBadge
          key={skill.name}
          name={skill.name}
          level={skill.level}
        />
      ))}
    </div>
  </div>
</section>

          <Events />
          <Testimonials />
          <Blog />

          <section className="py-20 px-4 bg-[#112240]" id="contact">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#0a192f] rounded-2xl p-8 border border-gray-700">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Let's Connect</h2>
                <p className="text-xl text-gray-300 mb-8 text-center">
                  I'm always open to discussing new projects and opportunities.
                </p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-[#112240] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-[#112240] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-[#112240] border border-gray-700 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-blue-500"
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-[#112240] border border-gray-700 rounded-lg px-4 py-3 w-full h-32 resize-none focus:outline-none focus:border-blue-500"
                  ></textarea>

                  {/* Error Message */}
              {errorMessage && (
                <p className="text-red-500 text-sm">{errorMessage}</p>
              )}
              
              {/* Success Message */}
              {showSuccessMessage && (
                <p className="text-green-500 text-sm">Message sent successfully!</p>
              )}
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
                
              
              </div>
            </div>
          </section>

          <footer className="py-12 px-4 border-t border-gray-800 bg-[#0a192f]">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Allan Robinson</h3>
                <p className="text-gray-400">
                  Creating digital experiences with code and creativity.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                  <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Connect</h3>
                <div className="flex gap-4">
                  <a href="https://github.com/Githaiga22" className="text-gray-400 hover:text-white transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/allan-robinson-3b54511a4/" className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="mailto:allangithaiga5@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center text-gray-400">
              <p>© 2024 Allan Robinson. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
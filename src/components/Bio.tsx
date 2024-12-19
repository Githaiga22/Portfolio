import React from 'react';
import { Download } from 'lucide-react';

const Bio: React.FC = () => {
  return (
    <section className="py-24 px-4" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700 transform translate-y-0">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="grid md:grid-cols-[2fr,1fr] gap-8">
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
              I'm Allan Robinson, a passionate full-stack developer with over 1+ years of experience specializing in GO and currently working on Blockchain related projects.
                My journey in tech started with a curiosity about how things work, which evolved into a career
                building innovative solutions for complex problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, writing technical
                articles, working on IoT innovations, or speaking at tech conferences about emerging technologies and best practices.
              </p>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-emerald-500
                text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity mt-4"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quick Facts</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span>🌍</span> Based in Kisumu
                </li>
                <li className="flex items-center gap-2">
                  <span>💼</span> Software Developer at Zone01 Kisumu
                </li>
                <li className="flex items-center gap-2">
                  <span>🎓</span> B.Sc. Bachelors Degree Economics & Finance
                </li>
                <li className="flex items-center gap-2">
                  <span>🌱</span> Founder of CodeUjuzi App
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
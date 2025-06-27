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
                Hi, I'm Allan Robinson — a passionate Full-stack and blockchain developer from Kenya with 2 years of hands-on experience building scalable web applications and impactful Web3 solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in Go (Golang) & Rust for backend systems and am actively working on decentralized applications that aim to solve real-world problems through blockchain.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm the co-founder of IMARA — a decentralized innovation platform connecting builders, innovators, and investors.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm also the co-founder of Web3way, an initiative dedicated to empowering Africa's grassroots developers to harness blockchain and unlock boundless opportunities.
              </p>
              <a
                href="/cv2.pdf"
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
                  <span>🌍</span> Based in Kenya
                </li>
                <li className="flex items-center gap-2">
                  <span>💼</span> Software Developer at Zone01 Kisumu
                </li>
                <li className="flex items-center gap-2">
                  <span>🎓</span> Certified Blockchain Developer - Lisk (2025)
                </li>
                <li className="flex items-center gap-2">
                  <span>🎓</span> Pokadot Blockchain Academy - Polkadot (2025)
                </li>
                <li className="flex items-center gap-2">
                  <span>🎓</span> B.Sc. Bachelors Degree Economics & Finance
                </li>
                <li className="flex items-center gap-2">
                  <span>🌱</span> Founder of IMARA
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
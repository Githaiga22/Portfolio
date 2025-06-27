import React from 'react';

const achievements = [
  {
    icon: '🏆',
    title: 'Lisk Pioneer (Season 1) 2025',
    description: 'Recognized for consistent contributions to the Lisk ecosystem.'
  },
  {
    icon: '🥇',
    title: '5x Blockchain Hackathon Winner 2025',
    description: 'Including ETH-iopia Builder Residency 2025.'
  },
  {
    icon: '🌍',
    title: 'Co-founder, Polkadot Kisumu Community 2025',
    description: 'Actively organizing developer workshops and events.'
  },
  {
    icon: '🌍',
     title: 'Co-founder, Web3WayAfrica 2025',
    description: "Empowering Africa's grassroots developers to harness blockchain and unlock boundless opportunities."
  },
  {
    icon: '🌱',
    title: 'Junior Polkadot Ambassador 2025',
    description: 'Supporting ecosystem growth and awareness in Kenya.'
  },
];

const Achievements: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-[#112240]" id="achievements">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Achievements & Recognitions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-6 bg-[#0a192f] rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg"
            >
              <span className="text-4xl md:text-5xl">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 
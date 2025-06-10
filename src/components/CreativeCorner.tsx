import { motion } from 'framer-motion';
import { Instagram, Youtube } from 'lucide-react';
import React from 'react';

const CreativeCorner: React.FC = () => {
  const creativeWorks = [
  {
    name: "Resin Art",
    description:
      "Curating a collection of handmade resin artworks including wall decor,Customized gift Products. Each post showcases the craftsmanship and creative process through vibrant visuals on Instagram.",
    link: "https://www.instagram.com/resin_artistry01?utm_source=qr&igsh=MTBzbTJ5eHRqcDlvOQ==",
    icon: <Instagram className="w-6 h-6 text-pink-500" />,
  },
  {
    name: "RK Drawings",
    description:
      "Exploring pencil sketches, character portraits, This Instagram page reflects my personal expression through art, often inspired by nature, culture, and imagination.",
    link: "https://www.instagram.com/rithish_kanna?utm_source=qr&igsh=MXBzcnlrMGJpZTg1aw==",
    icon: <Instagram className="w-6 h-6 text-pink-500" />,
  },
  {
    name: "Genuine Computers",
    description:
      "Handling content creation, editing, and social media management for tech-focused YouTube and Instagram channels. The channel delivers product reviews, and engaging content to help users make smarter tech decisions.",
    link: "https://www.youtube.com/@GenuineComputers-admin",
    icon: <Youtube className="w-6 h-6 text-red-600" />,
  },
];

  return (
    <section id="creative-corner" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Other <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A glimpse of my artistic and content creation journey beyond code.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {creativeWorks.map((work, index) => (
            <motion.a
              key={index}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{work.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{work.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{work.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeCorner;

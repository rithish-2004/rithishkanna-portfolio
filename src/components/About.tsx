import { motion } from 'framer-motion';
import { BookOpen, Code, Heart, Palette } from 'lucide-react';

import React from 'react';

const About: React.FC = () => {
 const interests = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Passionate about building scalable, efficient, and user-friendly web applications using modern frameworks and tools.",
  },
  {
    icon: BookOpen,
    title: "Artificial Intelligence",
    description:
      "Eagerly exploring AI technologies like machine learning and natural language processing to create innovative solutions.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Focused on designing clean, intuitive, and engaging user interfaces that enhance user experience.",
  },
  {
    icon: Heart,
    title: "Creative Arts",
    description:
      "Expressing creativity through resin art and digital portrait sketches, blending art with technology.",
  },
];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
           <div className="prose prose-lg dark:prose-invert">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              Recent engineering graduate in Computer Science and Business Systems (CSBS), passionate about software development, problem-solving, and emerging technologies. Skilled in web development, leadership, and teamwork, with a strong commitment to continuous learning and innovation. Dedicated to building scalable, efficient, and user-centered solutions while thriving in collaborative environments.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              During my academic journey, I actively participated in student organizations and leadership roles, which strengthened my communication, project management, and decision-making skills. Additionally, through internships and personal projects, I gained hands-on experience that honed my technical abilities and nurtured my creative problem-solving mindset.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              I am eager to apply my knowledge and creativity to real-world challenges, bridging the gap between technical functionality and intuitive design. I look forward to contributing meaningfully to tech-driven teams and growing within a dynamic and innovative professional environment.
            </p>
          </div>


            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Education</h3>
              <p className="text-gray-700 dark:text-gray-300">
              <strong>B.Tech in Computer Science and Business Systems (CSBS)</strong><br />
              Thiagarajar College of Engineering, Madurai<br />
              CGPA: 9.55/10
            </p>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-4">
                  <interest.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {interest.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
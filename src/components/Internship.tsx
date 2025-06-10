import { motion } from 'framer-motion';
import { Building, Calendar, CheckCircle, MapPin } from 'lucide-react';
import React from 'react';

const Internship: React.FC = () => {
  const responsibilities = [
"Built core UI pages for the Tiara jewelry showroom web app using React.js and Ant Design.",
"Connected frontend to backend APIs for user and product management with guidance from seniors.",
"Created responsive layouts and ensured mobile/tablet compatibility based on company UI guidelines.",
"Tested and debugged components to fix layout issues, input validations, and improve performance.",
"Learned version control using Git and collaborated via GitHub for pushing changes and resolving issues.",
"Wrote clear documentation for components and features I worked on for future developers."
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Antdesign", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "MSsql", category: "Database" },
    { name: "Express.js", category: "Framework" },
    { name: "Git", category: "Version Control" },
    { name: "Figma", category: "Design" }
  ];

  const achievements = [
  "Successfully completed a 1-month internship and received an official certificate",
  "Adapted quickly to the team’s workflow and project requirements within a short time",
  "Gained hands-on experience in professional development tools and practices",
  "Built confidence in contributing to real-world projects and understanding client needs"
];


  return (
    <section id="internship" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Internship <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional experience and contributions during my internship journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg mr-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    AAREL Infotech
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    Software Developer Intern
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Nov 2023 - Dec 2023</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Madurai, India</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Tiara - A Jewellary Showroom Application
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                 Worked on the Tiara web application aimed at simplifying order and inventory management for jewelry showroom staff and owners. 
  The platform was designed to help end users easily handle product listings, customer details, and billing, improving day-to-day business efficiency.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Key Achievements
                </h4>
                <div className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {achievement}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Responsibilities
              </h4>
              <div className="space-y-3">
                {responsibilities.map((responsibility, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                      {responsibility}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Technologies Used
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <div className="font-medium text-gray-900 dark:text-white text-sm">
                      {tech.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {tech.category}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
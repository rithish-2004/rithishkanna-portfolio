import { motion } from 'framer-motion';
import { Medal, Star, Trophy } from 'lucide-react';
import React from 'react';

const Achievements: React.FC = () => {
 const achievements = [
  {
    icon: Medal,
    title: "Department Topper - Year 1",
    organization: "CSBS Department",
    year: "2021 - 2022",
    description:
      "Awarded Silver Medal for securing highest academic performance during the first year.",
    category: "Academic",
    color: "from-amber-600 to-yellow-500", // Bronze tone
  },
  {
    icon: Medal,
    title: "Department Topper - Year 2",
    organization: "CSBS Department",
    year: "2022 - 2023",
    description:
      "Received Silver Medal for outstanding academic excellence.",
    category: "Academic",
    color: "from-gray-400 to-gray-600", // Silver tone
  },
  {
    icon: Medal,
    title: "Department Topper - Year 3",
    organization: "CSBS Department",
    year: "2023",
    description:
      "Honored with Silver Medal for consistent top performance and excellence.",
    category: "Academic",
    color: "from-yellow-400 to-yellow-600", // Gold tone
  },
];
  const stats = [
    { value: "9.55", label: "CGPA", suffix: "/10.0" },
    { value: "3", label: "Medals" },
    { value: "3", label: "Years", suffix: " Running" }
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Academic Achievements & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Recognition</span>
          </h2>
        </motion.div>

        {/* Stats Section */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
>
  {stats.slice(0, 3).map((stat, index) => (
    <motion.div
      key={stat.label}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl"
    >
      <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
        {stat.value}
        <span className="text-xl text-gray-600 dark:text-gray-400">{stat.suffix}</span>
      </div>
      <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
    </motion.div>
  ))}
</motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color}`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                    {achievement.category}
                  </span>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {achievement.year}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {achievement.title}
              </h3>

              <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                {achievement.organization}
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {achievement.description}
              </p>

              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <Star className="w-3 h-3 mr-1 text-yellow-500" />
                  <span>Recognized Achievement</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recognition Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white"
        >
          <Trophy className="w-16 h-16 mx-auto mb-4 opacity-80" />
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Consistent Excellence
          </h3>
          <p className="text-blue-100 max-w-2xl mx-auto">
            These achievements reflect my commitment to excellence, continuous learning, 
            and dedication to making a positive impact in both academic and professional environments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
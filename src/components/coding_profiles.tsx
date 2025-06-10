import { motion } from "framer-motion";
import { Activity, Award, BookOpen, Terminal } from "lucide-react";

const CodingProfiles: React.FC = () => {
  const profiles = [
    {
      icon: Award,
      title: "HackerRank",
      description:
        "Earned 6427 Hackos and badges in C, C++, and Java by solving challenges on HackerRank.",
      link: "https://www.hackerrank.com/profile/rithishkanna",
      hasButton: true,
    },
   
    {
      icon: Terminal,
      title: "LeetCode",
      description:
        "Solved 100+ problems on LeetCode, actively participating in contests to enhance problem-solving skills.",
      link: "https://leetcode.com/u/rithishkanna/",
      hasButton: true,
    },
    {
      icon: BookOpen,
      title: "GeeksforGeeks",
      description:
        "Solved 70+ problems on GeeksforGeeks and currently working towards solving GFG160 Challenge Problems to deepen my knowledge.",
      link: "https://www.geeksforgeeks.org/user/rithish1pfqa/",
      hasButton: true,
    },
     {
      icon: Activity,
      title: "SkillRack",
      description:
        "Achieved 3000+ points on SkillRack by solving diverse coding challenges and practicing real-world problem scenarios.",
      link: null,
      hasButton: false,
    },
  ];

  return (
    <section id="coding-profiles" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading same style as About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Coding <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Profiles</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My active coding platforms and progress
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map(({ icon: Icon, title, description, link, hasButton }, idx) => {
            const cardInner = (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col justify-between cursor-pointer bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full"
              >
                <div>
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>

                {hasButton && link && (
                  <div className="mt-6 text-center">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-block px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition"
                      aria-label={`View ${title} profile`}
                    >
                      View
                    </a>
                  </div>
                )}
              </motion.div>
            );

            return link ? (
              <a
                key={title}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${title} profile`}
                className="block h-full"
              >
                {cardInner}
              </a>
            ) : (
              <div key={title} className="h-full">
                {cardInner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;

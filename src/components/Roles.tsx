import { Briefcase, Calendar, Flag, Heart, Lightbulb, Palette, Shield, UserCheck, Users } from 'lucide-react';
import React from 'react';

import { motion } from 'framer-motion';

const Roles: React.FC = () => {
const roles = [
  {
    icon: Briefcase,
    title: "Placement Representative",
    organization: "Computer Science and Business Systems",
    period: "2024 - 2025",
    description:
      "Represented the CSBS department for placement activities and ensured proper sharing of information about drives and data collection of members to facilitate a smooth recruitment process.",
    responsibilities: [
      "Communicated placement opportunities to students",
      "Assisted in resume reviews and interview preparations"
    ],
    impact: "45+ students got placed in our department",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Users,
    title: "General Secretary (GS) - CSBS",
    organization: "Computer Science Business Systems",
    period: "2023 - 2024",
    description:
      "Organized academic and extracurricular activities for over 200 students. Received a shield of recognition for leadership.",
    responsibilities: [
      "Coordinated department-wide events and programs",
      "Managed juniors and guided them to organize activities effectively",
      "Collaborated with faculty and student committees"
    ],
    impact:
      "Successfully organized 8 major events, fostering community spirit and academic engagement.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: Shield,
    title: "Joint Secretary (JS) - CSBS",
    organization: "Computer Science Business Systems",
    period: "2022 - 2023",
    description:
      "Supported departmental leadership and managed student activities before promotion to General Secretary.",
    responsibilities: [
      "Assisted in event planning and coordination",
      "Maintained student records and attendance tracking",
      "Coordinated with other department representatives"
    ],
    impact: "Increased participation and engagement in departmental activities.",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: Calendar,
    title: "Techutsav General Secretary",
    organization: "Techutsav - TCE",
    period: "2023 - 2024",
    description:
      "Oversaw the organization and management of the Techutsav annual festival, ensuring successful execution of all events.",
    responsibilities: [
      "Led event planning and coordination across teams",
      "Managed logistics and scheduling",
      "Ensured smooth communication between participants and organizers"
    ],
    impact: "Delivered a seamless Techutsav event with positive feedback.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Flag,
    title: "Techutsav Event Director",
    organization: "Techutsav - TCE",
    period: "2022 - 2023",
    description:
      "Directed the 'Capture the Flag' event, coordinating teams and ensuring competitive fairness.",
    responsibilities: [
      "Organized and scheduled the Capture the Flag competition",
      "Managed participant registrations and enforced rules",
      "Handled event-day logistics and resolved issues promptly"
    ],
    impact: "Successfully conducted the event with over 50 participants.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Lightbulb,
    title: "TRIZ Student Chapter Representative",
    organization: "Computer Science and Business Systems",
    period: "2023 - 2024",
    description: "Represented the department in the TRIZ Student Chapter of Asia.",
    responsibilities: [
      "Shared details about upcoming events",
      "Encouraged students to participate in innovation challenges"
    ],
    impact: "Increased student engagement in innovative problem-solving activities.",
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: Heart,
    title: "Youth Red Cross (YRC) Member",
    organization: "TCE YRC Unit",
    period: "2021 - 2025",
    description: "Active volunteer in community service activities.",
    responsibilities: [
      "Organized blood donation camps and health awareness programs",
      "Conducted youth festivals showcasing YRC activities",
      "Participated in food safety and fire safety programs",
      "Trained in first aid and emergency response procedures",
      "Mentored junior volunteers in YRC activities"
    ],
    impact:
      "Contributed to multiple community service events, enhancing campus social responsibility.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Palette,
    title: "Fine Arts Club Participant",
    organization: "TCE Fine Arts Society",
    period: "2021 - 2023",
    description:
      "Active participant in creative arts, contributing to exhibitions, competitions, and cultural events.",
    responsibilities: [
      "Participated in inter-college art competitions",
      "Volunteered in organizing art exhibitions and cultural festivals"
    ],
    impact: "Won 3 art competitions and exhibited over 15 artworks.",
    color: "from-orange-500 to-yellow-500"
  },
  {
    icon: UserCheck,
    title: "Class Representative - 2nd Semester",
    organization: "Computer Science and Business Systems",
    period: "2021",
    description:
      "Class Representative for the 2nd semester, acting as liaison between students and faculty.",
    responsibilities: [
      "Collected and communicated student feedback",
      "Assisted faculty in organizing class activities",
      "Helped maintain classroom discipline"
    ],
    impact: "Improved communication and coordination between students and faculty.",
    color: "from-indigo-400 to-blue-400"
  },
  {
    icon: Users,
    title: "Class Committee Member - 2nd and 8th Semesters",
    organization: "Computer Science and Business Systems",
    period: "2021 , 2023",
    description:
      "Member of class committee responsible for supporting academic and administrative functions.",
    responsibilities: [
      "Represented students by informing faculty about issues faced",
      "Facilitated communication between students and department"
    ],
    impact:
      "Helped enhance academic environment and student support systems.",
    color: "from-green-400 to-teal-400"
  }
];


  return (
    <section id="roles" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Roles & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Responsibilities</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Leadership positions and active participation in various organizations and committees
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${role.color}`}>
                  <role.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {role.period}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    {role.impact}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {role.title}
              </h3>

              <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                {role.organization}
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                {role.description}
              </p>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Key Responsibilities:
                </h4>
                <ul className="space-y-1">
                  {role.responsibilities.map((responsibility, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start text-xs text-gray-600 dark:text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2 mt-1.5 flex-shrink-0" />
                      <span>{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white"
        >
          <Users className="w-16 h-16 mx-auto mb-4 opacity-80" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Leadership & Service
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold mb-1">3+</div>
              <div className="text-blue-100">Years of Leadership</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">10</div>
              <div className="text-blue-100">Active Roles</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">100+</div>
              <div className="text-blue-100">Students Impacted</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Roles;
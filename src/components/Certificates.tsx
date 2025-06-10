import { motion } from 'framer-motion';
import { Award, Building, Calendar, ExternalLink } from 'lucide-react';
import React from 'react';

const Certificates: React.FC = () => {
  const certificates = [
    {
      title: "Master Ethereum and Solidity Programming from Scratch",
      issuer: "Udemy",
      date: "Feb 2025",
      type: "Technical",
      description: "Learned Ethereum blockchain development and smart contract programming using Solidity.",
      skills: ["Blockchain Basics", "Solidity Programming", "Ethereum Concepts"],
      credentialId: "UC-c6aee623-b0ac-424f-9eb4-c1db644ef70c",
      link: "https://ude.my/UC-c6aee623-b0ac-424f-9eb4-c1db644ef70c",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "IBM Full Stack Software Developer",
      issuer: "Coursera",
      date: "April 2024",
      type: "Professional",
      description: "Completed full stack development track including HTML, CSS, JavaScript, React, Node.js, and deployment.",
      skills: ["Frontend & Backend", "React.js", "Node.js"],
      credentialId: "M6ZSUPUHXJ5V",
      link: "https://coursera.org/verify/professional-cert/M6ZSUPUHXJ5V",
      color: "from-orange-500 to-red-500"
    },
     {
      title: "Java Basics",
      issuer: "HackerRank",
      date: "Sept 2023",
      type: "Technical",
      description: "Verified knowledge of basic Java syntax, control structures, and OOP fundamentals.",
      skills: ["Java Syntax", "OOP", "Control Structures"],
      credentialId: "355794F42443",
      link: "https://www.hackerrank.com/certificates/355794F42443",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Data Analysis with Python",
      issuer: "Cognitive Class",
      date: "Sept 2022",
      type: "Technical",
      description: "Learned data wrangling, visualization, and basic statistical analysis using Python.",
      skills: ["Pandas", "Data Visualization", "Descriptive Statistics"],
      credentialId: "9fc35278135245b8a57a4251f51bc1f9",
      link: "https://courses.cognitiveclass.ai/certificates/9fc35278135245b8a57a4251f51bc1f9",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "SQL and Relational Databases 101",
      issuer: "Cognitive Class",
      date: "Nov 2022",
      type: "Technical",
      description: "Introduced to relational databases, normalization, and SQL queries.",
      skills: ["SQL", "Database Design", "DBMS Concepts"],
      credentialId: "98872f521b554bfcb0f6e46d13b8c9ff",
      link: "https://courses.cognitiveclass.ai/certificates/98872f521b554bfcb0f6e46d13b8c9ff",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services Training & Certification",
      date: "Feb 2025",
      type: "Technical",
      description: "Comprehensive understanding of AWS cloud services, global infrastructure, pricing, security, and support.",
      skills: ["AWS Cloud Concepts", "Cloud Security", "Billing and Pricing"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "AWS Skills Center: Becoming a Cloud Practitioner Part 1 - Basics",
      issuer: "Amazon Web Services Training & Certification",
      date: "Jan 2025",
      type: "Technical",
      description: "Learned fundamental AWS services, global cloud concepts, and core use cases.",
      skills: ["Cloud Basics", "AWS Infrastructure", "Service Overview"],
      color: "from-orange-500 to-red-500"
    },
    
   
    {
      title: "Cybersecurity Essentials",
      issuer: "Cisco",
      date: "May 2023",
      type: "Technical",
      description: "Explored key cybersecurity principles, threats, mitigation techniques, and best practices.",
      skills: ["Cybersecurity Fundamentals", "Threat Management", "Network Security"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Introduction to Packet Tracer",
      issuer: "Cisco",
      date: "May 2023",
      type: "Technical",
      description: "Learned network simulation, routing basics, and network configuration using Cisco Packet Tracer.",
      skills: ["Networking Basics", "Packet Tracer Simulation", "Routing"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Artificial Intelligence for All",
      issuer: "IUCEE Foundation",
      date: "March 2023",
      type: "Technical",
      description: "Completed with distinction. Gained foundational knowledge in AI, including logic, reasoning, and ethics.",
      skills: ["AI Basics", "Logic & Reasoning", "AI Ethics"],
      color: "from-orange-500 to-red-500"
    },
    
    {
      title: "Python 3.4.3 Training",
      issuer: "Spoken Tutorial",
      date: "Nov 2022",
      type: "Technical",
      description: "Basic programming in Python including syntax, control statements, and functions.",
      skills: ["Python Basics"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Java Training",
      issuer: "Spoken Tutorial",
      date: "Nov 2022",
      type: "Technical",
      description: "Covered Java programming essentials such as classes, methods, loops, and inheritance.",
      skills: ["Java OOP"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Programming in C and C++",
      issuer: "Elysium Academy",
      date: "Aug 2021",
      type: "Technical",
      description: "Learned procedural programming in C and object-oriented programming in C++.",
      skills: ["C Programming", "C++ OOP", "C++ Advanced Concepts"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certificates</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title + certificate.issuer}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${certificate.color}`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                    certificate.type === 'Technical' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
                  }`}>
                    {certificate.type}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{certificate.title}</h3>

              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
                <Building className="w-4 h-4 mr-1" />
                {certificate.issuer}
              </div>

              <div className="flex items-center text-sm text-gray-500 dark:text-gray-500 mb-3">
                <Calendar className="w-4 h-4 mr-1" />
                {certificate.date}
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {certificate.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Skills Covered:</h4>
                <div className="flex flex-wrap gap-1">
                  {certificate.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md">{skill}</span>
                  ))}
                  {certificate.skills.length > 3 && <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-md">+{certificate.skills.length - 3} more</span>}
                </div>
              </div>

              {(certificate.credentialId || certificate.link) && (
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  {certificate.credentialId && <div className="text-xs text-gray-500 dark:text-gray-400">ID: {certificate.credentialId}</div>}
                  {certificate.link && (
                    <motion.a href={certificate.link} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200">
                      <span className="text-sm font-medium">Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </motion.a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certification Journey */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
          <Award className="w-16 h-16 mx-auto mb-4 opacity-80" />
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Continuous Learning Journey</h3>
          <p className="text-blue-100 max-w-2xl mx-auto">
            These certifications represent my commitment to staying current with industry trends, mastering new technologies, and developing technical skills essential for professional growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;

import { motion } from 'framer-motion';
import { Calendar, Github, Star, Users } from 'lucide-react';
import React, { useState } from 'react';
import smithImg from '../images/3dsmith.jpeg';
import blogImg from '../images/blog.jpeg';
import classroomImg from '../images/classroom.jpeg';
import jewelleryImg from '../images/jewellary.jpeg';
import trackegeImg from '../images/trackege.jpeg';


const Projects: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const projects = [
  {
    title: "TrackEdge – Smart Sales & Service Billing",
    description: "Desktop app for managing sales, service, and billing. Includes product and customer modules with automated invoicing.",
    image: trackegeImg,
    tech: ["Python", "Tkinter", "SQLite"],
    features: [
      "Sales and Service Billing Management",
      "Invoice and Bill PDF Generation",
      "Dashboard with Sales, Purchase, and Service Statistics"
    ],
    github: "https://github.com/rithish-2004/TrackEdge",
    status: "Completed",
    duration: "1.5 months",
    team: "Individual"
  },
  {
    title: "Tiara – Jewellery Showroom Web App",
    description: "Full-stack showroom management platform with inventory tracking, user dashboards, and admin controls.",
    image: jewelleryImg,
    tech: ["React", "MongoDB", "Express.js", "Node.js", "Ant Design", "mssql"],
    features: [
      "Inventory Management",
      "User Dashboard",
      "Responsive Admin Panel"
    ],
    github: "https://github.com/rithish-2004/Tiara_jewellary",
    status: "Completed",
    duration: "1 month (Internship)",
    team: "2"
  },
  {
    title: "Virtual Classroom Manager (Backend Only)",
    description: "Java backend system for managing users, allocating classrooms, and handling session logistics.",
    image: classroomImg,
    tech: ["Java", "Design Patterns"],
    features: [
      "User Role Management",
      "Classroom Allocation",
      "Modular Backend Design"
    ],
    github: "https://github.com/rithish-2004/21H040_EI_Coding_Exercises",
    status: "Completed",
    duration: "1 month",
    team: "Individual"
  },
  {
    title: "3dSmith – 3D Printing Gift Store",
    description: "Web app for ordering customized 3D-printed gifts with AI model previews and order placement.",
    image: smithImg,
    tech: ["React", "Firebase", "OpenAI API", "MongoDB", "Nodejs", "Tailwind"],
    features: [
      "3D Model Upload",
      "AI Image Generator",
      "Order Placement"
    ],
    github: "https://github.com/rithish-2004/3d-smith",
    duration: "Ongoing",
    status: "In Progress",
    team: "Individual"
  },
  {
    title: "Blog World – Social Blogging Platform",
    description: "A blogging platform to share posts, react, explore trends, and view LinkedIn user info.",
    image: blogImg,
    tech: [
      "Express.js",
      "React",
      "Node.js",
      "MongoDB",
      "CSS",
      "React Router",
      "ScraperAPI"
    ],
    features: [
      "React to others' posts with likes and comments",
      "View detailed LinkedIn user info fetched via web scraping",
      "Trending posts display and social sharing functionality"
    ],
    github: "https://github.com/rithish-2004/3d-smith",
    status: "In Progress",
    duration: "Ongoing",
    team: "3"
  }
];


  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Key Features:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {(isExpanded ? project.features : project.features.slice(0, 3)).map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {project.features.length > 3 && (
                      <button
                        onClick={() => setExpandedIndex(isExpanded ? null : index)}
                        className="text-blue-600 dark:text-blue-400 text-xs mt-2 hover:underline"
                      >
                        {isExpanded ? "Show Less" : "Show More"}
                      </button>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {project.team}
                    </div>
                  </div>

                  {/* Button always at the bottom */}
                  <div className="flex space-x-3 mt-auto">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 flex-1 justify-center py-2 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

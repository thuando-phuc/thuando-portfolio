import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: "Project 1",
      description: "Detailed description of the project, including its purpose, your role, and the problem it solves.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "https://via.placeholder.com/600x400",
      github: "https://github.com/yourusername/project1",
      demo: "https://project1-demo.com",
      category: "web"
    },
    {
      title: "Project 2",
      description: "Detailed description of the project, including its purpose, your role, and the problem it solves.",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      image: "https://via.placeholder.com/600x400",
      github: "https://github.com/yourusername/project2",
      demo: "https://project2-demo.com",
      category: "mobile"
    },
    {
      title: "Project 3",
      description: "Detailed description of the project, including its purpose, your role, and the problem it solves.",
      technologies: ["Angular", "Firebase", "Tailwind CSS"],
      image: "https://via.placeholder.com/600x400",
      github: "https://github.com/yourusername/project3",
      demo: "https://project3-demo.com",
      category: "web"
    },
    {
      title: "Project 4",
      description: "Detailed description of the project, including its purpose, your role, and the problem it solves.",
      technologies: ["React Native", "GraphQL", "AWS"],
      image: "https://via.placeholder.com/600x400",
      github: "https://github.com/yourusername/project4",
      demo: "https://project4-demo.com",
      category: "mobile"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-16">Projects</h2>
        
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${filter === 'all' ? 'bg-secondary text-primary' : 'bg-dark text-light border border-tertiary/30'}`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('web')} 
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${filter === 'web' ? 'bg-secondary text-primary' : 'bg-dark text-light border border-tertiary/30'}`}
            >
              Web
            </button>
            <button 
              onClick={() => setFilter('mobile')} 
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${filter === 'mobile' ? 'bg-secondary text-primary' : 'bg-dark text-light border border-tertiary/30'}`}
            >
              Mobile
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="project-card"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-tertiary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-primary border border-secondary/30 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-light hover:text-secondary transition-colors duration-300"
                  >
                    <FaGithub className="mr-2" /> Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-light hover:text-secondary transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
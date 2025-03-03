import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Nature Album 1",
      description: "A collection of stunning landscape and wildlife photography",
      tags: ["Landscape", "Wildlife", "Nature"],
      image: "/images/project1/photo1.jpg",
      category: "nature"
    },
    {
      title: "Portrait Collection",
      description: "Professional portrait photography showcasing diverse individuals",
      tags: ["Portrait", "Studio", "Natural Light"],
      image: "/images/project1/photo2.jpg",
      category: "portrait"
    },
    {
      title: "Portrait Collection",
      description: "Professional portrait photography showcasing diverse individuals",
      tags: ["Portrait", "Studio", "Natural Light"],
      image: "/images/project1/photo3.jpg",
      category: "portrait"
    }
    // Add more albums as needed
  ];

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.category === filter
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-16">Photo Albums</h2>
        
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${filter === 'all' ? 'bg-secondary text-primary' : 'bg-dark text-light border border-tertiary/30'}`}
            >
              All Albums
            </button>
            <button 
              onClick={() => setFilter('nature')} 
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${filter === 'nature' ? 'bg-secondary text-primary' : 'bg-dark text-light border border-tertiary/30'}`}
            >
              Nature
            </button>
            <button 
              onClick={() => setFilter('portrait')} 
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${filter === 'portrait' ? 'bg-secondary text-primary' : 'bg-dark text-light border border-tertiary/30'}`}
            >
              Portrait
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="photo-card"
            >
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                <p className="text-tertiary text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 bg-primary border border-secondary/30 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end">
                  <button 
                    onClick={() => navigate(`/view-album/${project.title}`)}
                    className="text-light hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    View Album <span>-></span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
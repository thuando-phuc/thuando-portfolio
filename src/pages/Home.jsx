import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-secondary">Hello, I'm</span><br />
                Do Phuc Thuan
              </h1>
              <h2 className="text-2xl md:text-3xl text-tertiary mb-6">Artificial Intelligence Application Expert</h2>
              <p className="text-lg mb-8 text-tertiary max-w-lg">
                I am a senior in Sai Gon University. I have a deep passion for
                coding and AI. I want to deepen my understanding of AI
                generative and its application. In the short term, I seek to
                strenthen my skill in coding and teamwork, while my long-tern
                goal is to become a professional Software Developer and AI
                Engineer, within the next 2 years, specializing in innovative
                technologies and making meaningful contribustion to the tech
                industry as a whole and to the company I work for.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#contact" 
                  className="bg-secondary text-primary px-6 py-3 rounded-md font-medium hover:bg-secondary/80 transition-colors duration-300"
                >
                  Contact Me
                </a>
                <a 
                  href="/resume.pdf" 
                  className="border border-secondary text-secondary px-6 py-3 rounded-md font-medium hover:bg-secondary/10 transition-colors duration-300 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDownload className="mr-2" /> Resume
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary">
                  <img 
                    src="assest\avatar.jpg" 
                    alt="Your Name" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-8 w-full max-w-md"></div>
                  <iframe
                    width="100%" 
                    height="352"
                    src="https://open.spotify.com/embed/playlist/722xZgivcewD5geLr7nYpa?autoplay=1"                
                    allow="autoplay; encrypted-media"               
                    className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">About Me</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-lg mb-6">
                I am a dedicated professional with a passion for Articicial Intelligent (AI). With 0 years of experience, I have developed a strong foundation in AI application.
              </p>
              <p className="text-lg mb-6">
                I graduated from Sai Gon University with a degree in Information Technology. Throughout my career, I have consistently demonstrated a commitment to excellence and a drive to achieve outstanding results.
              </p>
              <p className="text-lg">
                My goal is to become professional AI Engineer. I am constantly seeking opportunities to learn and grow, both professionally and personally.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-secondary mb-2">Technical Skills</h4>
                  <ul className="space-y-2">
                    <li><span className="font-bold">PROGRAMMING LANGUAGES:</span> Python, C/C++, Java, JavaScript, PHP</li>
                    <li><span className="font-bold">DATABASES</span>: SQLite, MySQL, Microsoft SQL Server, Neo4j, MongoDB,Postgres</li>
                    <li><span className="font-bold">SOFTWARE & TOOL</span>: VS Code, Eclipse, Jupyter Notebook, PyCharm, Cursor, Git</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-secondary mb-2">Soft Skills</h4>
                  <ul className="space-y-2">
                    <li>Teamwork</li>
                    <li>Multitasking</li>
                    <li>Prolem-solving</li>
                    <li>Time Management</li>
                    <li>Creativity</li>
                    <li>Fast learner</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-medium text-secondary mb-2">Education</h4>
                <p className="font-semibold">Sai Gon University</p>
                <p>Information Technology</p>
                <p className="text-tertiary">2021 - 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-lg mb-6">
                I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out to me using any of the following contact methods.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="text-secondary mr-4" size={24} />
                  <a href="mailto:thuando.contact@gmail.com" className="hover:text-secondary transition-colors duration-300">
                  thuando.contact@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-secondary mr-4" size={24} />
                  <a href="tel:+84918839178" className="hover:text-secondary transition-colors duration-300">
                    +84 (918) 839-178
                  </a>
                </div>
                <div className="flex items-center">
                  <FaLinkedin className="text-secondary mr-4" size={24} />
                  <a href="https://linkedin.com/in/thuandodev" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-300">
                    linkedin.com/in/thuandodev
                  </a>
                </div>
                <div className="flex items-center">
                  <FaGithub className="text-secondary mr-4" size={24} />
                  <a href="https://github.com/justnas03" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-300">
                    github.com/justnas03
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 bg-dark border border-tertiary/30 rounded-md focus:outline-none focus:border-secondary"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 bg-dark border border-tertiary/30 rounded-md focus:outline-none focus:border-secondary"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-2 bg-dark border border-tertiary/30 rounded-md focus:outline-none focus:border-secondary"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-secondary text-primary px-6 py-3 rounded-md font-medium hover:bg-secondary/80 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCertificate, FaHandsHelping, FaUsers } from 'react-icons/fa';

const Awards = () => {
  const awards = [
    {
      title: "Award Title",
      organization: "Awarding Organization",
      date: "Month Year",
      description: "Description of the award and why it was given to you. Highlight the significance of this recognition in your field.",
      icon: <FaTrophy className="text-yellow-400" size={24} />
    },
    {
      title: "Certificate Name",
      organization: "Issuing Organization",
      date: "Month Year",
      description: "Description of the certification, what skills it validates, and how it has contributed to your professional development.",
      icon: <FaCertificate className="text-blue-400" size={24} />
    }
  ];

  const activities = [
    {
      title: "Volunteer Activity",
      organization: "Organization Name",
      date: "Month Year - Month Year",
      description: "Description of your volunteer work, your role, responsibilities, and the impact of your contribution.",
      icon: <FaHandsHelping className="text-green-400" size={24} />
    },
    {
      title: "Community Involvement",
      organization: "Community Group",
      date: "Month Year - Month Year",
      description: "Description of your involvement in the community, what you did, and how it benefited the community or contributed to your personal growth.",
      icon: <FaUsers className="text-purple-400" size={24} />
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-16">Awards & Activities</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-secondary">Awards & Certifications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-dark border border-tertiary/20 rounded-lg p-6 hover:border-secondary/30 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{award.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{award.title}</h4>
                    <p className="text-secondary mb-1">{award.organization}</p>
                    <p className="text-tertiary mb-3">{award.date}</p>
                    <p>{award.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-8 text-secondary">Activities & Involvement</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-dark border border-tertiary/20 rounded-lg p-6 hover:border-secondary/30 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{activity.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{activity.title}</h4>
                    <p className="text-secondary mb-1">{activity.organization}</p>
                    <p className="text-tertiary mb-3">{activity.date}</p>
                    <p>{activity.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
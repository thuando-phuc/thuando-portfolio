import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Position",
      company: "Company Name",
      location: "Location",
      date: "2021 - Present",
      description: "Detailed description of your responsibilities, achievements, and the skills you utilized in this role. Include specific projects, initiatives, or improvements you led or contributed to.",
      skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
      icon: <FaBriefcase />
    },
    {
      title: "Mid-level Position",
      company: "Company Name",
      location: "Location",
      date: "2018 - 2021",
      description: "Detailed description of your responsibilities, achievements, and the skills you utilized in this role. Include specific projects, initiatives, or improvements you led or contributed to.",
      skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
      icon: <FaBriefcase />
    },
    {
      title: "Junior Position",
      company: "Company Name",
      location: "Location",
      date: "2016 - 2018",
      description: "Detailed description of your responsibilities, achievements, and the skills you utilized in this role. Include specific projects, initiatives, or improvements you led or contributed to.",
      skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
      icon: <FaBriefcase />
    },
    {
      title: "University Degree",
      company: "University Name",
      location: "Location",
      date: "2012 - 2016",
      description: "Description of your studies, major achievements, relevant coursework, and any special projects or research you conducted.",
      skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
      icon: <FaGraduationCap />
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-16">Professional Experience</h2>
        
        <VerticalTimeline lineColor="#64ffda">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{ background: '#0a192f', color: '#ccd6f6', border: '1px solid rgba(136, 146, 176, 0.2)' }}
              contentArrowStyle={{ borderRight: '7px solid #0a192f' }}
              date={exp.date}
              iconStyle={{ background: '#64ffda', color: '#0a192f' }}
              icon={exp.icon}
            >
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <h4 className="text-secondary">{exp.company}</h4>
              <p className="text-tertiary mb-2">{exp.location}</p>
              <p className="mb-4">{exp.description}</p>
              <div>
                <h5 className="font-semibold mb-2">Skills Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-primary border border-secondary/30 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
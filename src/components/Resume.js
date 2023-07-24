import React from 'react';
import MyResume from './assets/2023Resume-RMosley.pdf'

const Resume = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'MySQL',
    'MongoDB',
    'Progressive Web Applications (PWA)',
    'GraphQL',
    
  ];

  return (
    <section className="p-5 bg-gray-200 text-blue-500">
      <h2 className="font-bold text-3xl mb-5">Resume</h2>
      <p>
        Download my <a href={MyResume}>RESUME</a>
      </p>
      <h3 className="font-bold text-2xl mt-5">Proficiencies</h3>
      <ul className="list-disc ml-5">
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;

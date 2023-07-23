import React from 'react';
import Project from './Project';

const Portfolio = () => {
  const projects = [
    // Add your projects here
    // Each project should have a title, image, repoLink, and appLink
    {
      title: 'Project 1',
      image: './assets/
       repoLink: 'https://github.com/',
      appLink: 'https://example.com/',
    },

    {
      title: 'Project 1',
      image: './assets/
       repoLink: 'https://github.com/',
      appLink: 'https://example.com/',
    },

    {
      title: 'Project 1',
      image: './assets/
       repoLink: 'https://github.com/',
      appLink: 'https://example.com/',
    },

    {
      title: 'Project 1',
      image: './assets/
       repoLink: 'https://github.com/',
      appLink: 'https://example.com/',
    },
    // Add more projects as needed...
  ];

  return (
    <section className="p-5 bg-gray-200 text-blue-500">
      <h2 className="font-bold text-3xl mb-5">Portfolio</h2>
      <div className="grid grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

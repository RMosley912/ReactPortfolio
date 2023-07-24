import React from 'react';
import Project from './Project';
import FeastFindr from './assets/FeastFindr1.png';
import EmergencyIron from './assets/emergencyironpicture3.png';
import WeatherDashboard from './assets/WeatherDashboardScreenshot1.png';
import interviewbuddy from './assets/interviewbuddy2.png';

const Portfolio = () => {
  const projects = [
    
    {
      title: 'Feast-Findr',
      image: {FeastFindr},
       repoLink: 'https://github.com/RMosley912/Feast-Findr',
      appLink: 'https://protected-mesa-32753.herokuapp.com/',
    },

    {
      title: 'Emergency Iron',
      image: {EmergencyIron},
       repoLink: 'https://github.com/RMosley912/emergency-iron-project',
      appLink: 'https://example.com/',
    },

    {
      title: 'Weather Dashboard',
      image: {WeatherDashboard},

       repoLink: 'https://github.com/RMosley912/WeatherDashboard',
      appLink: 'https://rmosley912.github.io/WeatherDashboard/',
    },

    {
      title: 'Interview Buddy',
      image: {interviewbuddy},
       repoLink: 'https://github.com/RMosley912/interview_buddy.com/',
      appLink: 'https://example.com/',
    },
    
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

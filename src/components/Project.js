import React from 'react';

const Project = ({ title, image, repoLink, appLink }) => {
  return (
    <div className="w-64 shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="font-bold mb-2">{title}</h3>
        <a href={appLink} target="_blank" rel="noreferrer">
          Deployed Application
        </a>
        <br />
        <a href={repoLink} target="_blank" rel="noreferrer">
          GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default Project;

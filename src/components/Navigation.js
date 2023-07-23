import React from 'react';

const Navigation = ({ currentSection, setCurrentSection }) => {
  return (
    <nav>
      <ul className="flex justify-around">
        {['About', 'Portfolio', 'Contact', 'Resume'].map((section) => (
          <li
            key={section}
            className={`py-3 px-5 text-xl ${
              currentSection === section ? 'text-blue-900' : 'text-blue-500'
            }`}
            onClick={() => setCurrentSection(section)}
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

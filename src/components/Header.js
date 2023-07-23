import React from 'react';
import Navigation from './Navigation';

const Header = ({ currentSection, setCurrentSection }) => {
  return (
    <header className="bg-gray-200 text-blue-500 p-5">
      <h1 className="font-bold text-5xl mb-2">Reggie Mosley Developer Portfolio</h1>
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
    </header>
  );
};

export default Header;


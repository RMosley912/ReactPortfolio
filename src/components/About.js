import React from 'react';
import Rmosleybw2 from './assets/Rmosleybw2.jpg';

const About = () => {
  return (
    <section className="p-5 bg-gray-100 text-blue-500">
      <h2 className="font-bold text-3xl mb-5">About Me</h2>
      <div className="flex">
        <img
          src={Rmosleybw2} // Replace with your image path
          alt="Reggie Mosley"
          className="w-48 h-48 object-cover rounded-full shadow"
        />
        <p className="ml-5">
          Hello, my name is Reggie Mosley. I'm a web developer specializing in
          front end development. I'm experienced with all stages of the development
          cycle for dynamic web projects. Please feel free to contact me and let's build something great together!
        </p>
      </div>
    </section>
  );
};

export default About;

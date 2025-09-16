import React from "react";
import html5 from'../assets/html5.png'
import css from '../assets/css.png'
import jv from'../assets/jv.png'
import react from'../assets/react.png'
import tailwind from "../assets/tailwind.png";
import figma from "../assets/figma.png";

const Skills = () => {
  const skills = [
      {name: "HTML", img: html5}, 
      {name: "CSS", img: css}, 
      {name: "JavaScript", img: jv}, 
      {name: "React", img:react}, 
      {name: "Tailwind", img: tailwind}, 
      {name: "Figma", img: figma}
    ];

  return (
    <div className=" backdrop-blur py-16">
      <div className="mx-auto max-w-[1440px] px-4"> {/*mx-auto max-w-7xl*/}
        <h2 className="reveal text-center font-display text-white text-3xl md:text-4xl font-bold">
          My Superpower
        </h2>

        {/* Scrolling animation container */}{/*full-width*/}
        <div className="mt-10 overflow-hidden">
          <div className="animate-slide flex gap-6">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="reveal flex flex-col justify-center items-center w-32 h-32 rounded-full border border-white/60 bg-white/70 p-6 text-center shadow hover:shadow-lg transition"
              >
                <img 
                  src={skill.img} 
                  alt={skill.name} 
                />
                <div className="mx-auto h-12 w-12 rounded-full mb-3"></div>
                <p className="font-semibold">{skill.name}</p>
              </div>
            ))}

            {/* duplicate for seamless looping */}
            {skills.map((skill, i) => (
              <div
                key={`copy-${i}`}
                className="reveal flex flex-col justify-center items-center w-32 h-32 rounded-full border border-white/60 bg-white/70 p-6 text-center shadow hover:shadow-lg transition"
              >
                <img 
                  src={skill.img} 
                  alt={skill.name} 
                />
                <div className="mx-auto h-12 w-12 rounded-full bg-gradient-to-tr mb-3"></div>
                <p className="font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

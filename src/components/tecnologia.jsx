import React from "react";
import html from "../img/icons portifólio/html.png"; // Replace with the actual path to your image
import css from "../img/icons portifólio/css.png"; // Replace with the actual path to your image
import js from "../img/icons portifólio/javascript.png"; // Replace with the actual path to your image
import react from "../img/icons portifólio/react.png"; // Replace with the actual path to your image
import node from "../img/icons portifólio/Node.png"; // Replace with the actual path to your image
import mongodb from "../img/icons portifólio/MongoDB.png"; // Replace with the actual path to your image
import tailwind from "../img/icons portifólio/tailwindCss.png"; // Replace with the actual path to your image

const tecnologias = [
  { id: 1, name: "HTML", icon: html },
  { id: 2, name: "CSS", icon: css },
  { id: 3, name: "JavaScript", icon: js },
  { id: 4, name: "React", icon: react },
  { id: 5, name: "Node.js", icon: node },
  { id: 6, name: "MongoDB", icon: mongodb },
  { id: 6, name: "TailwindCSS", icon: tailwind },
];


function Tecnologia() {
    return (
      <div className="h-[100vh] w-[100vw] bg-black flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl mb-6 font-bold">TECNOLOGIAS</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {tecnologias.map((tecnologia) => (
        <div
          key={tecnologia.id}
          className="rounded-[20px] bg-[#F28705] w-[200px] h-[200px] flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        >
          <img src={tecnologia.icon} alt={tecnologia.name} className="w-[80px] h-[80px]" />
        </div>
        ))}
      </div>
      </div>
    );
  }
  
export default Tecnologia
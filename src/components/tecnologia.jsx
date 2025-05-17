import React from "react";
import html from "../img/icons portifólio/html.png"; // Replace with the actual path to your image
import css from "../img/icons portifólio/css.png"; // Replace with the actual path to your image
import js from "../img/icons portifólio/javascript.png"; // Replace with the actual path to your image
import react from "../img/icons portifólio/react.png"; // Replace with the actual path to your image
import node from "../img/icons portifólio/Node.png"; // Replace with the actual path to your image
import mongodb from "../img/icons portifólio/MongoDB.png"; // Replace with the actual path to your image
import tailwind from "../img/icons portifólio/tailwindCss.png"; // Replace with the actual path to your image
import bootstrap from "../img/icons portifólio/bootstrap.png"; // Replace with the actual path to your image
import figma from "../img/icons portifólio/figma.png"; // Replace with the actual path to your image
import { useState } from "react";

const tecnologias = [
  { id: 1, name: "HTML", icon: html, desc: "Linguagem de marcação para estruturar páginas web.", mySkill: "É uma linguagem que domino bem.", myProjects: "Eu utilizei essa tecnologia nos seguintes projetos: Joguinho de loja, Portfólio pessoal, e Sistema de cadastro." },
  { id: 2, name: "CSS", icon: css, desc: "Linguagem de estilo para estilizar páginas web.", mySkill: "Tenho experiência em criar layouts responsivos.", myProjects: "Eu utilizei essa tecnologia nos seguintes projetos: Portfólio pessoal, Sistema de cadastro, e Página de vendas." },
  { id: 3, name: "JavaScript", icon: js, desc: "Linguagem de programação para adicionar interatividade às páginas web.", mySkill: "Uso frequentemente para criar funcionalidades dinâmicas.", myProjects: "Eu utilizei essa tecnologia nos seguintes projetos: Joguinho de loja, Sistema de cadastro, e Aplicação de tarefas." },
  { id: 4, name: "React", icon: react, desc: "Biblioteca JavaScript para construir interfaces de usuário.", mySkill: "Tenho experiência em criar componentes reutilizáveis.", myProjects: "Eu utilizei essa tecnologia nos seguintes projetos: Portfólio pessoal, Aplicação de tarefas, e Dashboard de controle." },
  { id: 5, name: "Node.js", icon: node, desc: "Ambiente de execução JavaScript para backend.", mySkill: "Uso para criar APIs e servidores.", myProjects: "Eu utilizei essa tecnologia nos seguintes projetos: API de cadastro, Sistema de autenticação, e Backend de e-commerce." },
  { id: 6, name: "MongoDB", icon: mongodb, desc: "Banco de dados NoSQL orientado a documentos.", mySkill: "Tenho conhecimento em modelagem de dados.", myProjects: "Eu utilizei essa tecnologia nos seguintes projetos: Sistema de cadastro, API de autenticação, e Aplicação de tarefas." },
  { id: 7, name: "TailwindCSS", icon: tailwind, desc: "Framework CSS utilitário para estilização rápida.", mySkill: "Uso para criar designs modernos e responsivos.", myProjects: "Eu utilizei essa tecnologia nos seguintes projetos: Portfólio pessoal, Dashboard de controle, e Página de vendas." },
  { id: 8, name: "Bootstrap", icon: bootstrap, desc: "Framework CSS para desenvolvimento rápido de interfaces.", mySkill: "Tenho experiência em usar seus componentes prontos.", myProjects: "Eu utilizei essa tecnologia nos seguintes projetos: Sistema de cadastro, Página de vendas, e Portfólio pessoal." },
  { id: 9, name: "Figma", icon: figma, desc: "Ferramenta de design colaborativo para interfaces.", mySkill: "Uso para criar protótipos e wireframes.", myProjects: "Eu utilizei essa tecnologia nos seguintes projetos: Design de portfólio, Aplicação de tarefas, e Página de vendas." },
];




function Tecnologia() {
  const [selectedTecnologia, setSelectedTecnologia] = useState(null);

  const handleTecnologiaClick = (tecnologia) => {
    setSelectedTecnologia(tecnologia);
  };

  const isSelected = (tecnologia) => {
    return selectedTecnologia && selectedTecnologia.id === tecnologia.id
      ? "border-2 border-[#F28705]"
      : "";
  };

  return (
    <div id="tecnologia" className="w-full min-h-screen flex flex-col items-center justify-center bg-[#350973] py-10 px-4">
      <h1 className="text-white text-3xl mb-6 font-bold do-hyeon-regular text-center">TECNOLOGIAS</h1>

      {/* Container geral que se adapta em telas menores */}
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl justify-center items-center lg:items-start">
        {/* Grade de ícones */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full max-w-[600px]">
          {tecnologias.map((tecnologia) => (
            <div
              key={tecnologia.id}
              onClick={() => handleTecnologiaClick(tecnologia)}
              className={`rounded-[20px] bg-[#6411D9] aspect-square flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer ${isSelected(tecnologia)}`}
            >
              <img src={tecnologia.icon} alt={tecnologia.name} className="w-[50px] h-[50px] mb-2" />
              <span className="text-white text-sm font-medium text-center">{tecnologia.name}</span>
            </div>
          ))}
        </div>

        {/* Card de detalhes, que se adapta embaixo ou ao lado */}
        {selectedTecnologia && (
          <div className="p-4 bg-[radial-gradient(circle_at_top_left,_#6411D9,_#350973)] rounded-[20px] shadow-lg text-white w-full sm:w-[90%] md:w-[500px]">
            <h2 className="text-xl font-bold mb-2">{selectedTecnologia.name}</h2>
            <p className="text-sm mb-2">{selectedTecnologia.desc}</p>
            <p className="text-sm mb-2">{selectedTecnologia.mySkill}</p>
            <p className="text-sm">{selectedTecnologia.myProjects}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tecnologia;


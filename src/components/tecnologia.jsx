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
import materiaUI from "../img/icons portifólio/MaterialUI.png"; // Replace with the actual path to your image
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
  { id: 10, name: "Materia UI", icon: materiaUI, desc: "Ferramenta de design colaborativo para interfaces.", mySkill: "Uso para criar protótipos e wireframes.", myProjects: "Eu utilizei essa tecnologia nos seguintes projetos: Design da vane store, Aplicação de tarefas, e Página de vendas." },
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

  
{/* Carrossel com pausa ao hover e ícones maiores */}
<div className="w-full overflow-hidden py-4 carousel-wrapper">
  <div className="flex animate-carousel whitespace-nowrap gap-12">
    {[...tecnologias, ...tecnologias].map((tecnologia, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center min-w-[120px] hover:scale-110 transition-transform cursor-pointer"
        onClick={() => handleTecnologiaClick(tecnologia)}
      >
        <img src={tecnologia.icon} alt={tecnologia.name} className="w-[80px] h-[80px] mb-2" />
        <span className="text-white text-base font-medium text-center">{tecnologia.name}</span>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default Tecnologia;

